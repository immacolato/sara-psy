#!/usr/bin/env python3
"""Dependency-free checks of the generated public artifact."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json
import re
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / '_site'
BASE = 'https://immacolato.github.io/sara-psy/'


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.elements = []
        self.schemas = []
        self.schema = None
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.elements.append((tag, attrs))
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.schema = ''

    def handle_data(self, data):
        if self.schema is not None:
            self.schema += data

    def handle_endtag(self, tag):
        if tag == 'script' and self.schema is not None:
            self.schemas.append(json.loads(self.schema))
            self.schema = None


def local_path(url, current):
    parsed = urlsplit(url)
    if parsed.scheme or parsed.netloc:
        return None
    path = unquote(parsed.path)
    if path.startswith('/sara-psy/'):
        target = SITE / path[len('/sara-psy/'):]
    elif path.startswith('/'):
        target = SITE / path.lstrip('/')
    elif path:
        target = current.parent / path
    else:
        target = current
    if target.is_dir():
        target /= 'index.html'
    return target, parsed.fragment


pages = {path: Page(path.read_text()) for path in SITE.glob('*.html')}
checks = 0
for path, page in pages.items():
    ids = [attrs['id'] for tag, attrs in page.elements if 'id' in attrs]
    assert len(ids) == len(set(ids)), f'{path.name}: duplicate IDs'
    assert sum(tag == 'main' for tag, attrs in page.elements) == 1
    assert sum(tag == 'h1' for tag, attrs in page.elements) == 1
    for tag, attrs in page.elements:
        assert tag not in ('form', 'iframe'), f'{path.name}: unexpected data collection/embed'
        if tag == 'img':
            assert 'alt' in attrs
            if attrs.get('src', '').endswith('.jpg'):
                assert 'width' in attrs and 'height' in attrs
        if tag in ('script', 'link', 'img', 'source'):
            resource = attrs.get('src') or (attrs.get('href') if attrs.get('rel') == 'stylesheet' else None)
            if resource:
                assert not urlsplit(resource).netloc, f'{path.name}: external resource {resource}'
        for key in ('src', 'href'):
            if key in attrs:
                target = local_path(attrs[key], path)
                if target:
                    file, fragment = target
                    assert file.is_file(), f'{path.name}: missing {attrs[key]}'
                    if fragment:
                        assert file in pages and any(a.get('id') == fragment for t, a in pages[file].elements), f'missing anchor {attrs[key]}'
        if 'srcset' in attrs:
            for candidate in attrs['srcset'].split(','):
                assert local_path(candidate.strip().split()[0], path)[0].is_file()
    if path.name != '404.html':
        canonical = [attrs.get('href') for tag, attrs in page.elements if attrs.get('rel') == 'canonical']
        assert canonical == [BASE + ('' if path.name == 'index.html' else path.name)]
    checks += 1

# Public artifacts must not contain editorial drafts, tests, source scripts or original photos.
assert not any((SITE / name).exists() for name in ('docs', 'tests', 'scripts', 'piano-seo.md', 'img/profilo.jpg', 'img/faro.jpeg'))
for path in SITE.rglob('*'):
    if path.suffix in ('.html', '.css', '.js'):
        text = path.read_text()
        assert not any(token in text for token in ('formspree.io', 'googletagmanager.com', 'fonts.googleapis.com', 'fonts.gstatic.com'))
script = (SITE / 'script.js').read_text()
assert not re.search(r'\b(localStorage|gtag|fetch)\b', script)
assert '.reveal {' not in (SITE / 'styles.css').read_text(), 'content hidden by default'
schema = pages[SITE / 'index.html'].schemas[0]
assert [node['@type'] for node in schema['@graph']] == ['Person', 'Place']
assert not any('hasCredential' in node for node in schema['@graph'])
locations = [node.text for node in ET.parse(SITE / 'sitemap.xml').getroot().iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
assert locations == [BASE, BASE + 'privacy.html', BASE + 'cookie.html']

# Explicit contrast calculations for the corrected functional text pairs.
def rgb(hex_value):
    return [int(hex_value[index:index + 2], 16) / 255 for index in (1, 3, 5)]


def contrast(fg, bg):
    def lum(channels):
        linear = [v / 12.92 if v <= .04045 else ((v + .055) / 1.055) ** 2.4 for v in channels]
        return sum(v * weight for v, weight in zip(linear, (.2126, .7152, .0722)))
    values = sorted((lum(fg), lum(bg)))
    return (values[1] + .05) / (values[0] + .05)

pairs = {'sage-dark/cream': ('#496650', '#F7F3ED'), 'sage-dark/ivory': ('#496650', '#EDE8DF'),
         'warm-mid/ivory': ('#6B6256', '#EDE8DF'), 'white/button': ('#FFFFFF', '#496650')}
for label, (fg, bg) in pairs.items():
    ratio = contrast(rgb(fg), rgb(bg))
    assert ratio >= 4.5, f'{label}: {ratio}'
    print(f'{label}: {ratio:.2f}:1')
for label, background, opacity in [('footer text', '#1E1E1C', .75), ('contact label', '#393937', .75)]:
    foreground = [v * opacity + b * (1 - opacity) for v, b in zip(rgb('#F7F3ED'), rgb(background))]
    ratio = contrast(foreground, rgb(background))
    assert ratio >= 4.5
    print(f'{label}: {ratio:.2f}:1')
print(f'PASS: {checks} pages; local links/resources, privacy boundaries, sitemap, schema and public artifact.')
