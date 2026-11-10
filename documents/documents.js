(() => {
  const language = new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'ru';
  document.documentElement.lang = language;
  document.title = language === 'en' ? 'Documents — TATTOO TUT' : 'Документы — ТАТУ ТУТ';
  document.querySelectorAll('[data-ru][data-en]').forEach(element => {
    element.textContent = element.dataset[language];
  });
  document.querySelectorAll('[data-language]').forEach(link => {
    if (link.dataset.language === language) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.querySelector('.brand').setAttribute('aria-label', language === 'en' ? 'TATTOO TUT — home' : 'ТАТУ ТУТ — на главную');
  document.querySelector('meta[name="description"]').content = language === 'en'
    ? 'The TATTOO TUT public offer and personal data processing policy.'
    : 'Публичная оферта и политика обработки персональных данных ТАТУ ТУТ.';
})();
