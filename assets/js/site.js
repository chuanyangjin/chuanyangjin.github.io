/* chuanyangjin.com site script (plain ES5, loaded with `defer`).
   - mobile menu
   - home news: year dividers + "Show N earlier entries" / "Collapse to recent"
   - publication TL;DR toggles
   - /publication/ Selected / All switch (URL hash #all)
   - Life gallery: masonry layout, image fade-in, lightbox
   Each feature does nothing when its elements are not on the page. */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  var motionQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  var SWIFT = 'cubic-bezier(0.2, 0.7, 0.3, 1)';

  function reducedMotion() {
    return !!(motionQuery && motionQuery.matches);
  }

  function each(list, fn) {
    Array.prototype.forEach.call(list || [], fn);
  }

  function debounce(fn, ms) {
    var timer = null;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(fn, ms);
    };
  }

  function isEscape(e) {
    return e.key === 'Escape' || e.key === 'Esc';
  }

  function scrollY() {
    return window.pageYOffset || root.scrollTop || 0;
  }

  function scrollToY(y) {
    var top = Math.max(0, Math.round(y));
    try {
      window.scrollTo({ top: top, behavior: reducedMotion() ? 'auto' : 'smooth' });
    } catch (err) {
      window.scrollTo(0, top);
    }
  }

  /* ---------------------------------------------------------------- menu */
  function initNav() {
    var toggle = doc.querySelector('.nav-toggle');
    var nav = doc.getElementById('site-nav');
    if (!toggle || !nav) {
      return;
    }

    function isOpen() {
      return nav.classList.contains('open');
    }

    function setOpen(open) {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!isOpen());
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) {
        setOpen(false);
      }
    });

    doc.addEventListener('click', function (e) {
      if (isOpen() && !nav.contains(e.target) && !toggle.contains(e.target)) {
        setOpen(false);
      }
    });

    /* Focus moving out of the open menu (Tab past its last link) closes it, so the panel never
       covers the newly focused element. A null relatedTarget (focus leaving the window, or Safari,
       which does not focus clicked buttons) is ignored: outside clicks are handled above. */
    nav.addEventListener('focusout', function (e) {
      var to = e.relatedTarget;
      if (isOpen() && to && !nav.contains(to) && !toggle.contains(to)) {
        setOpen(false);
      }
    });

    doc.addEventListener('keydown', function (e) {
      if (isEscape(e) && isOpen()) {
        var focusInside = nav.contains(doc.activeElement);
        setOpen(false);
        if (focusInside) {
          toggle.focus();
        }
      }
    });

    window.addEventListener('resize', function () {
      if (isOpen() && window.innerWidth > 800) {
        setOpen(false);
      }
    });
  }

  /* ---------------------------------------------------------------- news */
  function listItems(list) {
    var items = [];
    each(list.children, function (el) {
      if (el.tagName === 'LI') {
        items.push(el);
      }
    });
    return items;
  }

  function markYearStarts(items) {
    var prev = null;
    items.forEach(function (li) {
      var date = li.querySelector('.news-date');
      var m = date ? /(\d{4})/.exec(date.textContent || '') : null;
      if (!m) {
        return;
      }
      if (prev !== null && m[1] !== prev) {
        li.classList.add('year-start');
      }
      prev = m[1];
    });
  }

  function setupCollapse(list, items, limit, n) {
    var hiddenCount = items.length - limit;
    var collapsed = true;
    var btn = doc.createElement('button');

    if (!list.id) {
      list.id = 'log-' + (n + 1);
    }
    btn.type = 'button';
    btn.className = 'pill log-toggle';
    btn.setAttribute('aria-controls', list.id);
    list.parentNode.insertBefore(btn, list.nextSibling);

    /* The first `limit` rows stay fully visible; the next row peeks in by --log-peek
       (set in site.css) and fades out under the mask. */
    function collapsedHeight() {
      var top = list.getBoundingClientRect().top;
      var bottom = items[limit - 1].getBoundingClientRect().bottom;
      var peek = parseFloat(getComputedStyle(list).getPropertyValue('--log-peek')) || 0;
      var next = items[limit] ? items[limit].getBoundingClientRect().height : 0;
      return Math.ceil(bottom - top + Math.min(peek, next));
    }

    function setHidden(on) {
      for (var i = limit; i < items.length; i++) {
        if (on) {
          items[i].setAttribute('inert', '');
          items[i].setAttribute('aria-hidden', 'true');
        } else {
          items[i].removeAttribute('inert');
          items[i].removeAttribute('aria-hidden');
        }
      }
    }

    function label() {
      btn.textContent = collapsed ? 'Show ' + hiddenCount + ' earlier entries' : 'Collapse to recent';
      btn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    }

    function refit() {
      if (!collapsed) {
        return;
      }
      var prev = list.style.transition;
      list.style.transition = 'none';
      list.style.maxHeight = collapsedHeight() + 'px';
      void list.offsetHeight;
      list.style.transition = prev;
    }

    function expand() {
      collapsed = false;
      list.classList.remove('is-collapsed');
      setHidden(false);
      label();
      if (reducedMotion()) {
        list.style.transition = 'none';
        list.style.maxHeight = 'none';
        return;
      }
      var finished = false;
      var done = function (e) {
        if (finished || (e && (e.target !== list || e.propertyName !== 'max-height'))) {
          return;
        }
        finished = true;
        list.removeEventListener('transitionend', done);
        if (!collapsed) {
          list.style.maxHeight = 'none';
          list.style.overflow = '';
        }
      };
      /* The class (and its overflow) is gone already: keep the rows that are still below the growing
         box clipped, or they would paint over the pill and the next section until the box catches up */
      list.style.overflow = 'hidden';
      list.style.overflow = 'clip';
      list.style.transition = 'max-height 0.5s ' + SWIFT;
      list.style.maxHeight = list.scrollHeight + 'px';
      list.addEventListener('transitionend', done);
      setTimeout(done, 700);
    }

    function collapse() {
      collapsed = true;
      list.style.overflow = '';
      var target = collapsedHeight();
      list.classList.add('is-collapsed');
      setHidden(true);
      label();
      if (reducedMotion()) {
        list.style.transition = 'none';
        list.style.maxHeight = target + 'px';
      } else {
        list.style.transition = 'none';
        list.style.maxHeight = list.scrollHeight + 'px';
        void list.offsetHeight;
        list.style.transition = 'max-height 0.5s ' + SWIFT;
        list.style.maxHeight = target + 'px';
      }
      var listTop = list.getBoundingClientRect().top + scrollY();
      if (scrollY() > listTop) {
        scrollToY(listTop - 120);
      }
    }

    list.classList.add('is-collapsed');
    list.style.maxHeight = collapsedHeight() + 'px';
    setHidden(true);
    label();

    btn.addEventListener('click', function () {
      if (collapsed) {
        expand();
      } else {
        collapse();
      }
    });
    window.addEventListener('resize', debounce(refit, 150));
    window.addEventListener('load', refit);
    if (doc.fonts && doc.fonts.ready) {
      doc.fonts.ready.then(refit);
    }
    /* Rows can also grow without a resize event (a text-spacing override, text-only zoom): watch
       the visible rows and the peeking one. refit() changes only the list's max-height, never the
       rows' size, so this cannot loop. */
    if (window.ResizeObserver) {
      var ro = new ResizeObserver(debounce(refit, 100));
      for (var r = 0; r <= limit && r < items.length; r++) {
        ro.observe(items[r]);
      }
    }
  }

  function initLogs() {
    each(doc.querySelectorAll('ul.log'), function (list, n) {
      var items = listItems(list);
      if (list.classList.contains('news-list')) {
        markYearStarts(items);
      }
      var limit = parseInt(list.getAttribute('data-collapse'), 10);
      if (limit > 0 && items.length >= limit + 4) {
        setupCollapse(list, items, limit, n);
      }
    });
  }

  /* ---------------------------------------------------------------- TL;DR */
  /* Each button opens the abstract of its own paper (looked up inside the same .pub), and the
     abstracts get fresh ids, because the ids rendered from the hand-edited pub.id can repeat
     (e.g. a copied entry) or be empty. */
  function initTldr() {
    each(doc.querySelectorAll('.pub-tldr'), function (btn, i) {
      var pub = btn.closest ? btn.closest('.pub') : null;
      var panel = pub ? pub.querySelector('.pub-abstract') : doc.getElementById(btn.getAttribute('aria-controls') || '');
      if (!panel) {
        btn.hidden = true;
        return;
      }
      panel.id = 'tldr-' + (i + 1);
      btn.setAttribute('aria-controls', panel.id);
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') !== 'true';
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        panel.classList.toggle('open', open);
      });
    });
  }

  /* ---------------------------------------------------------------- Selected / All */
  function initPubFilter() {
    var list = doc.querySelector('.pubs[data-view]');
    var buttons = doc.querySelectorAll('.seg button[data-view]');
    if (!list || !buttons.length) {
      return;
    }
    var status = doc.getElementById('pub-status');
    var total = list.querySelectorAll('.pub').length;
    var selectedCount = list.querySelectorAll('.pub[data-selected="true"]').length;

    function viewFromHash() {
      return location.hash === '#all' ? 'all' : 'selected';
    }

    function setView(view, byUser) {
      list.setAttribute('data-view', view);
      each(buttons, function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-view') === view ? 'true' : 'false');
      });
      if (!byUser) {
        return;
      }
      if (window.history && history.replaceState) {
        history.replaceState(history.state, '', location.pathname + location.search + (view === 'all' ? '#all' : ''));
      }
      if (status) {
        status.textContent = view === 'all'
          ? 'Showing all ' + total + ' publications'
          : 'Showing ' + selectedCount + ' selected publications';
      }
    }

    setView(viewFromHash(), false);
    list.classList.add('is-ready');
    /* From here aria-pressed drives the switch; js-all only styled it (and the list) before this ran */
    root.classList.remove('js-all');

    each(buttons, function (b) {
      b.addEventListener('click', function () {
        setView(b.getAttribute('data-view') === 'all' ? 'all' : 'selected', true);
      });
    });
    /* Only #all and the empty hash name a view; other hashes (e.g. the skip link's #main) keep it */
    window.addEventListener('hashchange', function () {
      if (location.hash === '#all' || location.hash === '') {
        setView(viewFromHash(), false);
      }
    });
  }

  /* ---------------------------------------------------------------- gallery */
  function attrRatio(img) {
    var w = parseFloat(img.getAttribute('width'));
    var h = parseFloat(img.getAttribute('height'));
    return w > 0 && h > 0 ? w / h : 0;
  }

  function imageRatio(img) {
    if (!img) {
      return 0;
    }
    return attrRatio(img) || (img.naturalWidth > 0 && img.naturalHeight > 0 ? img.naturalWidth / img.naturalHeight : 0);
  }

  /* Places every cell on a grid of 1px rows (one row unit = 1px + the row gap), so that no cell
     ever has empty space above it:
     - a one-column photo goes to the shortest column (the leftmost one on a tie);
     - a two-column photo (`layout: wide`, or any photo wider than 3:2 when there are 3+ columns) needs
       two neighbouring columns whose bottoms can be made level: the lower column's last photo may grow
       by up to 15% and the higher one's may shrink by up to 10% (object-fit: cover absorbs it). A photo
       that is two columns wide only because of its shape must also not start more than half its own
       one-column height below the shortest column. Without such a pair an auto-wide photo takes one
       column; a `layout: wide` photo first lets up to three later one-column photos go ahead, then
       takes one column;
     - the last `cols` photos are placed two-column ones first, then the tallest first, and each
       column's last one-column photo then grows (<= 20%) or shrinks (<= 12%) so that as many columns as
       possible end on the same row.
     Photos whose size is not known yet get a square slot and are re-placed when they load. The previous
     run's placements are cleared first: left in place, they would add implicit columns after the grid
     narrows (e.g. a phone rotated back to portrait), and the column count would be read wrong. */
  function masonry(grid, cells) {
    grid.classList.add('is-masonry');
    cells.forEach(function (fig) {
      fig.style.gridColumn = '';
      fig.style.gridRow = '';
    });
    var cs = getComputedStyle(grid);
    var cols = cs.gridTemplateColumns.split(/\s+/).filter(function (s) { return s; }).length || 1;
    var colGap = parseFloat(cs.columnGap) || 0;
    var rowGap = parseFloat(cs.rowGap) || 0;
    var rowH = parseFloat(cs.gridAutoRows) || 1;
    var inner = grid.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
    var colW = (inner - colGap * (cols - 1)) / cols;
    var heights = [];
    var last = [];
    var placed = [];
    var c;
    for (c = 0; c < cols; c++) {
      heights.push(0);
      last.push(null);
    }

    function rowsFor(span, ratio) {
      var cellW = colW * span + colGap * (span - 1);
      return Math.max(1, Math.round((cellW / ratio + rowGap) / (rowH + rowGap)));
    }

    function single(col) {
      return last[col] !== null && last[col].span === 1;
    }

    function shortest() {
      var best = 0;
      for (var k = 1; k < cols; k++) {
        if (heights[k] < heights[best]) {
          best = k;
        }
      }
      return best;
    }

    function put(item, col, span, top, rows) {
      var p = { item: item, col: col, span: span, top: top, rows: rows };
      placed.push(p);
      for (var k = col; k < col + span; k++) {
        heights[k] = top + rows;
        last[k] = p;
      }
    }

    function putOne(item) {
      var col = shortest();
      put(item, col, 1, heights[col], rowsFor(1, item.ratio));
    }

    function putTwo(item) {
      var one = rowsFor(1, item.ratio);
      var lowest = Math.min.apply(null, heights);
      var best = null;
      for (var s = 0; s < cols - 1; s++) {
        var lo = heights[s] <= heights[s + 1] ? s : s + 1;
        var hi = lo === s ? s + 1 : s;
        var gap = heights[hi] - heights[lo];
        var grow = gap && single(lo) ? Math.min(gap, Math.floor(last[lo].rows * 0.15)) : 0;
        var trim = gap - grow;
        if (trim && !(single(hi) && trim <= Math.floor(last[hi].rows * 0.1))) {
          continue;
        }
        var top = heights[hi] - trim;
        if (!item.explicit && top - lowest > one * 0.5) {
          continue;
        }
        if (!best || top < best.top || (top === best.top && gap < best.gap)) {
          best = { start: s, lo: lo, hi: hi, grow: grow, trim: trim, top: top, gap: gap };
        }
      }
      if (!best) {
        return false;
      }
      if (best.grow) {
        last[best.lo].rows += best.grow;
        heights[best.lo] += best.grow;
      }
      if (best.trim) {
        last[best.hi].rows -= best.trim;
        heights[best.hi] -= best.trim;
      }
      put(item, best.start, 2, best.top, rowsFor(2, item.ratio));
      return true;
    }

    var queue = cells.map(function (fig) {
      var ratio = imageRatio(fig.querySelector('img')) || 1;
      var explicit = fig.classList.contains('wide');
      return {
        fig: fig,
        ratio: ratio,
        explicit: explicit,
        wide: cols >= 3 && (explicit || (!fig.classList.contains('narrow') && ratio > 1.5)),
        waited: 0
      };
    });

    while (queue.length) {
      if (cols > 1 && queue.length <= cols) {
        queue.sort(function (a, b) {
          if (a.wide !== b.wide) {
            return a.wide ? -1 : 1;
          }
          return a.wide ? 0 : rowsFor(1, b.ratio) - rowsFor(1, a.ratio);
        });
        queue.forEach(function (item) {
          if (!(item.wide && putTwo(item))) {
            putOne(item);
          }
        });
        break;
      }
      var item = queue[0];
      if (!item.wide || putTwo(item)) {
        if (!item.wide) {
          putOne(item);
        }
        queue.shift();
        continue;
      }
      var next = -1;
      for (var k = 1; k < queue.length; k++) {
        if (!queue[k].wide) {
          next = k;
          break;
        }
      }
      if (item.explicit && item.waited < 3 && next > 0) {
        item.waited++;
        putOne(queue.splice(next, 1)[0]);
        continue;
      }
      queue.shift();
      putOne(item);
    }

    /* Level the bottoms: the target row that the most columns can reach */
    function reach(col, target) {
      var d = target - heights[col];
      if (!d) {
        return 0;
      }
      if (!single(col)) {
        return -1;
      }
      var rows = last[col].rows;
      return (d > 0 ? d <= rows * 0.2 : -d <= rows * 0.12) ? Math.abs(d) / rows : -1;
    }
    var lowRow = Math.min.apply(null, heights);
    var highRow = Math.max.apply(null, heights);
    var target = highRow;
    var fewest = Infinity;
    var least = Infinity;
    for (var t = lowRow; t <= highRow; t++) {
      var misses = 0;
      var worst = 0;
      for (c = 0; c < cols; c++) {
        var v = reach(c, t);
        if (v < 0) {
          misses++;
        } else if (v > worst) {
          worst = v;
        }
      }
      if (misses < fewest || (misses === fewest && worst < least)) {
        fewest = misses;
        least = worst;
        target = t;
      }
    }
    for (c = 0; c < cols; c++) {
      if (reach(c, target) > 0) {
        last[c].rows += target - heights[c];
        heights[c] = target;
      }
    }

    placed.forEach(function (p) {
      p.item.fig.style.gridColumn = (p.col + 1) + ' / span ' + p.span;
      p.item.fig.style.gridRow = (p.top + 1) + ' / span ' + p.rows;
    });
  }

  function initGallery() {
    var figures = [];
    each(doc.querySelectorAll('.photo-grid'), function (grid) {
      var cells = [];
      each(grid.children, function (el) {
        if (el.classList.contains('ph')) {
          cells.push(el);
        }
      });
      if (!cells.length) {
        return;
      }
      var layout = function () {
        masonry(grid, cells);
      };
      var layoutSoon = debounce(layout, 60);
      cells.forEach(function (fig) {
        figures.push(fig);
        var img = fig.querySelector('img');
        if (!img) {
          return;
        }
        var shown = function () {
          img.classList.add('ld');
        };
        if (img.complete && img.naturalWidth > 0) {
          shown();
          return;
        }
        img.addEventListener('load', function () {
          shown();
          if (!attrRatio(img)) {
            layoutSoon();
          }
        });
        img.addEventListener('error', shown);
      });
      layout();
      window.addEventListener('load', layout);
      window.addEventListener('resize', debounce(layout, 150));
    });
    if (figures.length) {
      initLightbox(figures);
    }
  }

  function initLightbox(figures) {
    var box = doc.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Photo viewer');
    box.innerHTML =
      '<button type="button" class="lightbox-close" aria-label="Close">\u00d7</button>' +
      '<button type="button" class="lightbox-prev" aria-label="Previous photo">\u2039</button>' +
      '<img class="lightbox-img" alt="">' +
      '<button type="button" class="lightbox-next" aria-label="Next photo">\u203a</button>' +
      '<div class="lightbox-caption"></div>';
    doc.body.appendChild(box);

    var view = box.querySelector('.lightbox-img');
    var caption = box.querySelector('.lightbox-caption');
    var closeBtn = box.querySelector('.lightbox-close');
    var prevBtn = box.querySelector('.lightbox-prev');
    var nextBtn = box.querySelector('.lightbox-next');
    var index = 0;
    var lastFocus = null;
    var inerted = [];

    /* The caption (with a visually hidden "Photo N of M") describes the dialog and is
       announced when the arrow keys or buttons change the photo */
    caption.id = 'lightbox-caption';
    caption.setAttribute('aria-live', 'polite');
    box.setAttribute('aria-describedby', 'lightbox-caption');

    if (figures.length < 2) {
      prevBtn.hidden = true;
      nextBtn.hidden = true;
    }

    function isOpen() {
      return box.classList.contains('open');
    }

    function show(i) {
      index = (i + figures.length) % figures.length;
      var fig = figures[index];
      var img = fig.querySelector('img');
      view.src = img.getAttribute('data-full') || img.currentSrc || img.src;
      view.alt = img.alt || '';
      caption.textContent = '';
      var count = doc.createElement('span');
      count.className = 'sr-only';
      count.textContent = 'Photo ' + (index + 1) + ' of ' + figures.length + ': ';
      caption.appendChild(count);
      each(fig.querySelectorAll('figcaption span'), function (s) {
        var span = doc.createElement('span');
        span.textContent = s.textContent;
        caption.appendChild(span);
      });
    }

    function open(i) {
      lastFocus = doc.activeElement;
      show(i);
      box.classList.add('open');
      /* On <html>: its overflow-x: clip keeps body overflow from reaching the viewport */
      root.style.overflow = 'hidden';
      each(doc.body.children, function (el) {
        if (el !== box && !el.hasAttribute('inert')) {
          el.setAttribute('inert', '');
          inerted.push(el);
        }
      });
      closeBtn.focus();
    }

    function close() {
      if (!isOpen()) {
        return;
      }
      box.classList.remove('open');
      view.removeAttribute('src');
      root.style.overflow = '';
      inerted.forEach(function (el) {
        el.removeAttribute('inert');
      });
      inerted = [];
      if (lastFocus && lastFocus.focus) {
        lastFocus.focus();
      }
    }

    function trapTab(e) {
      var focusable = [closeBtn, prevBtn, nextBtn].filter(function (b) { return !b.hidden; });
      var at = focusable.indexOf(doc.activeElement);
      var next;
      e.preventDefault();
      if (e.shiftKey) {
        next = at <= 0 ? focusable.length - 1 : at - 1;
      } else {
        next = at === -1 || at === focusable.length - 1 ? 0 : at + 1;
      }
      focusable[next].focus();
    }

    figures.forEach(function (fig, i) {
      var img = fig.querySelector('img');
      var alt = img ? img.alt : '';
      fig.setAttribute('tabindex', '0');
      fig.setAttribute('role', 'button');
      fig.setAttribute('aria-label', 'View photo' + (alt ? ': ' + alt : ''));
      fig.addEventListener('click', function () {
        open(i);
      });
      fig.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          open(i);
        }
      });
    });

    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      close();
    });
    prevBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      show(index - 1);
    });
    nextBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      show(index + 1);
    });
    /* A click on the backdrop or on the photo itself closes the viewer */
    box.addEventListener('click', close);

    doc.addEventListener('keydown', function (e) {
      if (!isOpen()) {
        return;
      }
      if (isEscape(e)) {
        e.preventDefault();
        close();
      } else if (e.key === 'ArrowLeft' && figures.length > 1) {
        e.preventDefault();
        show(index - 1);
      } else if (e.key === 'ArrowRight' && figures.length > 1) {
        e.preventDefault();
        show(index + 1);
      } else if (e.key === 'Tab') {
        trapTab(e);
      }
    });
  }

  /* ---------------------------------------------------------------- start */
  function init() {
    initNav();
    initLogs();
    initTldr();
    initPubFilter();
    initGallery();
  }

  if (doc.readyState === 'loading') {
    doc.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
