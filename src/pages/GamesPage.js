import { createHeader } from '../components/Header.js';
import { createFooter } from '../components/Footer.js';
import { getGames } from '../utils/content.js';

// Move currentPage outside of renderGamesPage
let currentPage = 1;
const itemsPerPage = 15;

function createHeroSlider(games) {
  const gamesWithBanners = games
    .filter(game => game.bannerBackground && game.bannerBackground !== '' && game.bannerLogo && game.bannerLogo !== '')
    .slice(0, 4);
  
  if (gamesWithBanners.length === 0) return '';
  
  return `
    <div class="relative h-[600px] overflow-hidden">
      <div class="hero-slider flex transition-transform duration-500">
        ${gamesWithBanners.map((game, index) => `
          <div class="hero-slide w-full h-[600px] flex-shrink-0 relative">
            <div class="absolute inset-0 bg-cover bg-center transition-transform duration-1000" 
                 style="background-image: url('${game.bannerBackground}')">
            </div>
            <div class="absolute inset-0 flex items-center justify-end px-20">
              <img src="${game.bannerLogo}" alt="${game.title}" 
                   class="w-1/3 h-auto transform translate-y-full opacity-0 banner-logo transition-all duration-1000 ease-out">
            </div>
          </div>
        `).join('')}
      </div>
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        ${gamesWithBanners.map((_, index) => `
          <button class="slider-dot w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity duration-300${index === 0 ? ' opacity-100' : ''}" 
                  data-index="${index}"></button>
        `).join('')}
      </div>
    </div>
  `;
}

function createGameCard(game) {
  return `
    <div class="game-card group relative aspect-square overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
           style="background-image: url('${game.thumbnailBackground}')">
      </div>
      <img src="${game.thumbnailLogo}" alt="${game.title}" 
           class="absolute inset-0 m-auto w-2/3 h-auto game-card-logo">
      <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                  flex flex-col items-center">
        <div class="game-buttons w-full flex flex-col items-center mt-auto mb-12" data-state="initial">
          <button class="more-btn w-48 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
            MORE
          </button>
          <div class="action-buttons hidden flex-col gap-4 w-48">
            <button class="w-full py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
              PLAY
            </button>
            <button class="w-full py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
              GAME SHEET
            </button>
            <button class="w-full py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
              MARKETING
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function loadMoreGames(games) {
  const startIndex = 0;
  const endIndex = currentPage * itemsPerPage;
  const gamesContainer = document.querySelector('.games-grid');
  gamesContainer.innerHTML = games.slice(startIndex, endIndex).map(game => createGameCard(game)).join('');
  
  const loadMoreBtn = document.querySelector('#loadMoreGames');
  if (loadMoreBtn && endIndex >= games.length) {
    loadMoreBtn.style.display = 'none';
  }

  setupGameButtons();
}

export function renderGamesPage() {
  const games = getGames().sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
  currentPage = 1; // Reset currentPage when rendering the page

  document.querySelector('#app').innerHTML = `
    ${createHeader()}
    <main class="pt-24 bg-black">
      ${createHeroSlider(games)}
      <div class="container mx-auto px-12 py-20">
        <div class="games-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${games.slice(0, itemsPerPage).map(game => createGameCard(game)).join('')}
        </div>
        ${games.length > itemsPerPage ? `
          <div class="text-center mt-12">
            <button id="loadMoreGames" class="load-more">Load More</button>
          </div>
        ` : ''}
      </div>
    </main>
    ${createFooter()}
  `;

  setupSlider();
  setupLoadMore(games);
  setupMobileMenu();
  setupGameButtons();
}

function setupGameButtons() {
  const gameCards = document.querySelectorAll('.game-card');
  
  gameCards.forEach(card => {
    const buttonContainer = card.querySelector('.game-buttons');
    const moreBtn = buttonContainer.querySelector('.more-btn');
    const actionButtons = buttonContainer.querySelector('.action-buttons');

    moreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      moreBtn.style.display = 'none';
      actionButtons.style.display = 'flex';
      buttonContainer.dataset.state = 'expanded';
    });

    // Keep buttons visible when hovering over them
    actionButtons.addEventListener('mouseenter', () => {
      if (buttonContainer.dataset.state === 'expanded') {
        moreBtn.style.display = 'none';
        actionButtons.style.display = 'flex';
      }
    });

    // Reset to initial state when mouse leaves the card
    card.addEventListener('mouseleave', () => {
      if (buttonContainer.dataset.state === 'expanded') {
        moreBtn.style.display = 'block';
        actionButtons.style.display = 'none';
        buttonContainer.dataset.state = 'initial';
      }
    });
  });
}

function setupSlider() {
  let currentSlide = 0;
  const slider = document.querySelector('.hero-slider');
  const dots = document.querySelectorAll('.slider-dot');
  const slides = document.querySelectorAll('.hero-slide');
  const logos = document.querySelectorAll('.banner-logo');
  const slideCount = slides.length;

  if (!slider || slideCount === 0) return;

  function showLogo(index) {
    logos[index].classList.remove('translate-y-full', 'opacity-0');
  }

  function hideLogo(index) {
    logos[index].classList.add('translate-y-full', 'opacity-0');
  }

  function goToSlide(index) {
    hideLogo(currentSlide);
    currentSlide = index;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('opacity-100', i === currentSlide);
      dot.classList.toggle('opacity-50', i !== currentSlide);
    });
    setTimeout(() => showLogo(currentSlide), 500);
  }

  setTimeout(() => showLogo(0), 500);

  setInterval(() => {
    goToSlide((currentSlide + 1) % slideCount);
  }, 5000);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });
}

function setupLoadMore(games) {
  const loadMoreBtn = document.querySelector('#loadMoreGames');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      currentPage++;
      loadMoreGames(games);
    });
  }
}

function setupMobileMenu() {
  const hamburger = document.querySelector('.hamburger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('active');
    });
  }
}