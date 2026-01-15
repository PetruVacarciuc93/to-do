const themeToggleBtn = document.getElementById('themeToggleBtn');

function updateThemeIcon(theme) {
  const iconMap = { light: 'dark_mode', dark: 'light_mode', pink: 'light_mode' };
  themeToggleBtn.querySelector('.material-symbols-outlined').textContent = iconMap[theme] || 'light_mode';
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');

  document.body.classList.remove('light', 'dark', 'pink');
  document.body.classList.add(theme);
  localStorage.setItem('theme', theme);
  updateThemeIcon(theme);
}

// Кнопка переключения тем: light → dark → pink → light
themeToggleBtn.addEventListener('click', () => {
  let newTheme;
  if (document.body.classList.contains('light')) newTheme = 'dark';
  else if (document.body.classList.contains('dark')) newTheme = 'pink';
  else newTheme = 'light';

  document.body.classList.remove('light', 'dark', 'pink');
  document.body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

// Загружаем тему при старте
loadTheme();
