// Mobile navigation
(function () {
  var t = document.querySelector('.nav-toggle');
  var n = document.getElementById('nav');
  if (!t || !n) return;
  t.addEventListener('click', function () {
    var open = n.classList.toggle('open');
    t.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// Payment estimator (principal + interest, plus optional tax and insurance)
(function () {
  var f = document.getElementById('calc');
  if (!f) return;
  var $ = function (id) { return document.getElementById(id); };
  var usd = function (n) { return '$' + Math.round(n).toLocaleString('en-US'); };
  function num(id) { return parseFloat(String($(id).value).replace(/[^0-9.]/g, '')) || 0; }
  function run() {
    var price = num('c-price'), downPct = num('c-down'), rate = num('c-rate'), years = num('c-term');
    var taxPct = num('c-tax'), ins = num('c-ins');
    var loan = price * (1 - downPct / 100);
    $('o-loan').textContent = usd(loan);
    $('o-down').textContent = usd(price - loan);
    if (!rate || !price) {
      $('o-total').textContent = '—';
      $('o-pi').textContent = '—'; $('o-tax').textContent = '—'; $('o-ins').textContent = '—';
      $('o-hint').textContent = 'Enter an interest rate to see an estimate.';
      return;
    }
    var r = rate / 100 / 12, n = years * 12;
    var pi = loan * r / (1 - Math.pow(1 + r, -n));
    var tax = price * taxPct / 100 / 12, insM = ins / 12;
    $('o-pi').textContent = usd(pi);
    $('o-tax').textContent = usd(tax);
    $('o-ins').textContent = usd(insM);
    $('o-total').textContent = usd(pi + tax + insM);
    $('o-hint').textContent = 'Estimated monthly payment';
  }
  f.addEventListener('input', run);
  f.addEventListener('submit', function (e) { e.preventDefault(); });
  run();
})();

// Contact form. If the form has data-endpoint, POST there; otherwise open the visitor's email app.
(function () {
  var f = document.getElementById('contact-form');
  if (!f) return;
  var msg = document.getElementById('form-msg');
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(f);
    if (d.get('company')) return; // honeypot
    var endpoint = f.getAttribute('data-endpoint');
    var lines = [
      'Name: ' + d.get('name'),
      'Phone: ' + d.get('phone'),
      'Email: ' + d.get('email'),
      'I am looking to: ' + d.get('goal'),
      'Timeline: ' + d.get('timeline'),
      '',
      d.get('message') || ''
    ];
    if (endpoint) {
      fetch(endpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: d })
        .then(function (r) { if (!r.ok) throw 0; f.reset(); show('Thank you. Your note is on its way and we will be in touch within one business day.'); })
        .catch(function () { show('Something went wrong sending your note. Please call 972-677-9223 instead.'); });
    } else {
      var href = 'mailto:' + f.getAttribute('data-to') +
        '?subject=' + encodeURIComponent('Home loan question from ' + d.get('name')) +
        '&body=' + encodeURIComponent(lines.join('\n'));
      window.location.href = href;
      show('Your email app should have opened with your note ready to send. If it did not, call 972-677-9223 or email ' + f.getAttribute('data-to') + '.');
    }
  });
  function show(t) { msg.textContent = t; msg.hidden = false; msg.focus(); }
})();

// Loan guide slider: previous/next buttons scroll one card at a time.
(function () {
  document.querySelectorAll('[data-slider]').forEach(function (el) {
    var track = el.querySelector('.slider-track');
    var prev = el.querySelector('[data-prev]'), next = el.querySelector('[data-next]');
    function step() { var li = track.querySelector('li'); return li ? li.getBoundingClientRect().width + 20 : 300; }
    function sync() {
      prev.disabled = track.scrollLeft < 8;
      next.disabled = track.scrollLeft + track.clientWidth > track.scrollWidth - 8;
    }
    prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
    track.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    sync();
  });
})();
