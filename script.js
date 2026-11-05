const toggle = document.getElementById('theme-toggle');
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  toggle.setAttribute('aria-pressed', String(theme === 'dark'));
  toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
}
try { setTheme(localStorage.getItem('homepage-theme') === 'light' ? 'light' : 'dark'); } catch { setTheme('dark'); }
toggle.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  try { localStorage.setItem('homepage-theme', theme); } catch {}
});
