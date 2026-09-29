#!/usr/bin/env python3
"""Build a public-only artifact; never publish editorial/audit material."""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / '_site'
PUBLIC_FILES = ('index.html', 'privacy.html', 'cookie.html', '404.html',
                'styles.css', 'fonts.css', 'script.js', 'sitemap.xml', 'robots.txt')


def build():
    if OUTPUT.exists():
        shutil.rmtree(OUTPUT)
    OUTPUT.mkdir()
    for filename in PUBLIC_FILES:
        shutil.copy2(ROOT / filename, OUTPUT / filename)
    shutil.copytree(ROOT / 'fonts', OUTPUT / 'fonts')
    (OUTPUT / 'img').mkdir()
    for image in (ROOT / 'img').iterdir():
        if image.name == 'logo.svg' or (image.suffix in ('.webp', '.jpg') and '-' in image.stem):
            shutil.copy2(image, OUTPUT / 'img' / image.name)
    print(f'Public artifact: {OUTPUT}')
    print('No deploy performed. Configure hosting to publish this artifact only.')


if __name__ == '__main__':
    build()
