import './style.css';
import Navigo from 'navigo';
import { renderHomePage } from './src/pages/HomePage.js';
import { renderNewsPage } from './src/pages/NewsPage.js';
import { renderNewsArticlePage } from './src/pages/NewsArticlePage.js';
import { renderGamesPage } from './src/pages/GamesPage.js';
import { renderAboutPage } from './src/pages/AboutPage.js';
import { renderPartnersPage } from './src/pages/PartnersPage.js';
import { renderContactPage } from './src/pages/ContactPage.js';
import { renderCareersPage } from './src/pages/CareersPage.js';
import { renderJobDescriptionPage } from './src/pages/JobDescriptionPage.js';

const router = new Navigo('/');

// Helper function to handle page rendering and scrolling
function handleRoute(renderFn, params = null) {
  window.scrollTo(0, 0);
  if (params) {
    renderFn(params);
  } else {
    renderFn();
  }
}

router
  .on('/', () => {
    handleRoute(renderHomePage);
  })
  .on('/news', () => {
    handleRoute(renderNewsPage);
  })
  .on('/news/:slug', ({ data }) => {
    handleRoute(renderNewsArticlePage, data);
  })
  .on('/games', () => {
    handleRoute(renderGamesPage);
  })
  .on('/about', () => {
    handleRoute(renderAboutPage);
  })
  .on('/partners', () => {
    handleRoute(renderPartnersPage);
  })
  .on('/contact', () => {
    handleRoute(renderContactPage);
  })
  .on('/careers', () => {
    handleRoute(renderCareersPage);
  })
  .on('/careers/:slug', ({ data }) => {
    handleRoute(renderJobDescriptionPage, data);
  })
  .resolve();

// Handle navigation links
document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-navigo]');
  if (link) {
    e.preventDefault();
    router.navigate(link.getAttribute('href'));
  }
});