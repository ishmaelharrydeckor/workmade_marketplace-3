// Cookie banner: remember the choice
(function () {
  var el = document.getElementById('cookie');
  try { if (localStorage.getItem('wm-cookie')) el.hidden = true; } catch (e) {}
  el.addEventListener('click', function (e) {
    if (!e.target.hasAttribute('data-cookie')) return;
    el.hidden = true;
    try { localStorage.setItem('wm-cookie', e.target.textContent.toLowerCase()); } catch (err) {}
  });
})();

// Marquees: duplicate track content once so the -50% loop is seamless
document.querySelectorAll('.track').forEach(function (t) {
  t.innerHTML += t.innerHTML;
});

// Nav pill: highlight follows hover
(function () {
  var items = document.querySelectorAll('.nav__item');
  items.forEach(function (i) {
    i.addEventListener('mouseenter', function () {
      items.forEach(function (o) { o.classList.remove('is-active'); });
      i.classList.add('is-active');
    });
  });
})();
