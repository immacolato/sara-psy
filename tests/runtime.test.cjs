const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const test = require('node:test');
const source = fs.readFileSync(require('node:path').join(__dirname, '../script.js'), 'utf8');

function setup({ observers = true, reduced = false, legal = false } = {}) {
  const handlers = {};
  const observersCreated = [];
  const properties = {};
  const motion = { matches: reduced, addEventListener: (name, handler) => { handlers.motion = handler; } };
  function node(href) {
    const classes = new Set();
    return { classes, attributes: {}, href, disabled: true, hidden: true,
      classList: { add: c => classes.add(c), remove: c => classes.delete(c),
        toggle(c, enabled) { enabled ? classes.add(c) : classes.delete(c); } },
      setAttribute(key, value) { this.attributes[key] = value; },
      removeAttribute(key) { delete this.attributes[key]; },
      getAttribute(key) { return key === 'href' ? href : this.attributes[key]; },
      getBoundingClientRect: () => ({ top: 1200, height: 100 }), querySelector: () => null,
      addEventListener: (name, handler) => { handlers[href + name] = handler; },
      focus(options) { this.focused = options; },
    };
  }
  const reveal = node('reveal');
  const nav = node('nav');
  const top = node('top');
  const main = node('main');
  const link = node('#contatti');
  const context = {
    document: {
      documentElement: { style: { setProperty: (key, value) => { properties[key] = value; } } },
      querySelectorAll: selector => selector === '.reveal' ? [reveal]
        : selector === 'section[id]' ? (legal ? [] : [{ id: 'contatti' }]) : [link],
      querySelector: () => nav,
      getElementById: id => id === 'main' ? main : (legal ? null : top),
    },
    window: { innerHeight: 800, scrollY: 0, matchMedia: () => motion,
      addEventListener: (name, handler) => { handlers[name] = handler; },
      scrollTo(options) { this.lastScroll = options; },
    },
    // Any accidental storage/network use fails these runtime tests.
    localStorage: { getItem() { throw Error('unexpected storage access'); } },
    fetch() { throw Error('unexpected network request'); },
  };
  if (observers) {
    context.IntersectionObserver = class {
      constructor(callback) { this.callback = callback; observersCreated.push(this); }
      observe() {} unobserve(target) { this.unobserved = target; }
    };
    context.ResizeObserver = class { observe() {} };
  }
  vm.runInNewContext(source, context);
  return { context, handlers, reveal, nav, top, main, link, properties, observersCreated, motion };
}

test('legal pages work without homepage controls', () => {
  const app = setup({ legal: true });
  assert.doesNotThrow(() => app.handlers.scroll());
});
test('missing observers leaves content visible and provides resize fallback', () => {
  const app = setup({ observers: false });
  assert.equal(app.reveal.classes.has('reveal-ready'), false);
  assert.equal(typeof app.handlers.resize, 'function');
});
test('reduced motion keeps content visible', () => {
  const app = setup({ reduced: true });
  assert.equal(app.reveal.classes.has('reveal-ready'), false);
});
test('reveal becomes visible on intersection, including preference changes', () => {
  const app = setup();
  const observer = app.observersCreated[0];
  observer.callback([{ isIntersecting: true, target: app.reveal }], observer);
  assert.equal(app.reveal.classes.has('visible'), true);
  assert.equal(observer.unobserved, app.reveal);
  app.handlers.motion({ matches: true });
  assert.equal(app.reveal.classes.has('visible'), true);
});
test('invisible scroll-top is disabled and hidden; return restores focus', () => {
  const app = setup({ reduced: true });
  assert.equal(app.top.hidden, true);
  assert.equal(app.top.disabled, true);
  app.context.window.scrollY = 600;
  app.handlers.scroll();
  assert.equal(app.top.hidden, false);
  assert.equal(app.top.disabled, false);
  app.handlers.topclick();
  assert.equal(app.context.window.lastScroll.behavior, 'instant');
  assert.equal(app.main.focused.preventScroll, true);
});
test('header offset uses measured height and active nav exposes aria-current', () => {
  const app = setup();
  assert.equal(app.properties['--header-offset'], '116px');
  app.observersCreated[1].callback([{ isIntersecting: true, target: { id: 'contatti' } }]);
  assert.equal(app.link.attributes['aria-current'], 'location');
  app.observersCreated[1].callback([{ isIntersecting: true, target: { id: 'top' } }]);
  assert.equal(app.link.attributes['aria-current'], undefined);
});
