import 'regenerator-runtime';

import '../styles/main.scss';
import '../styles/responsive.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
import './component/index';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
