import menuTemplate from './templates/menu.hbs';
import menuData from './menu.json';
import './styles.css';

// Theme realisation
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  menuContainer: document.querySelector('.js-menu'),
};

refs.checkbox.addEventListener('change', onCheckboxChange);

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.body.classList.add(currentTheme);
  if (currentTheme === Theme.DARK) {
    refs.checkbox.checked = true;
  }
}
function onCheckboxChange(e) {
  if (e.target.checked) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

// Markup realisation

const menuMarkup = createMenuMarkup(menuData);
refs.menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menuData) {
  return menuData.map(menuTemplate).join('');
}

// function toggleTheme(theme) {
//   if (theme === Theme.DARK) {
//     document.body.classList.add(Theme.DARK);
//     document.body.classList.remove(Theme.LIGHT);
//     refs.checkbox.checked = true;
//   } else {
//     document.body.classList.add(Theme.LIGHT);
//     document.body.classList.remove(Theme.DARK);
//     localStorage.setItem("theme", Theme.LIGHT);
//   }
// }
// toggleTheme(currentTheme);

// function onThemeChange() {
//   const newTheme = refs.checkbox.checked ? Theme.DARK : Theme.LIGHT;
//   localStorage.setItem("theme", newTheme);
//   toggleTheme(newTheme);
// }
