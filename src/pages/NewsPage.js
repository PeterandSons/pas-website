import { createHeader } from '../components/Header.js';
import { createFooter } from '../components/Footer.js';
import { getNews } from '../utils/content.js';

function createNewsCard(article) {
  return `
    <div class="bg-black">
      <a href="/news/${article.slug}" data-navigo>
        <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover hover:opacity-80 transition-opacity duration-300">
      </a>
      <div class="p-6">
        <h3 class="text-white text-[18px] font-semibold mb-2">
          <a href="/news/${article.slug}" class="hover:text-[#FFC900]" data-navigo>${article.title}</a>
        </h3>
        <p class="text-[#FFC900] text-[12px] font-light mb-3">${article.date}</p>
        <p class="text-white text-[14px] font-light mb-4">${article.content}</p>
        <a href="/news/${article.slug}" class="text-[#FFC900] text-[12px] font-light hover:text-yellow-500" data-navigo>Read More &gt;&gt;</a>
      </div>
    </div>
  `;
}

export function renderNewsPage() {
  const news = getNews();
  let currentPage = 1;
  const itemsPerPage = 6;

  function loadMoreNews() {
    const startIndex = 0;
    const endIndex = currentPage * itemsPerPage;
    const newsContainer = document.querySelector('.news-grid');
    newsContainer.innerHTML = news.slice(startIndex, endIndex).map(article => createNewsCard(article)).join('');
    
    const loadMoreBtn = document.querySelector('#loadMoreNews');
    if (endIndex >= news.length) {
      loadMoreBtn.style.display = 'none';
    }
  }

  document.querySelector('#app').innerHTML = `
    ${createHeader()}
    <main class="pt-32 bg-black">
      <div class="news-title-container py-20 mb-20 bg-center bg-cover" style="background-image: url('https://peterandsonsgames.com/wp-content/uploads/2023/08/Footer-image-main-03-03-2.png'); background-size: 100% 100%; transform: scaleY(-1)">
        <div class="container mx-auto px-12" style="transform: scaleY(-1)">
          <h1 class="text-white text-5xl font-bold tracking-wider uppercase">Latest News</h1>
        </div>
      </div>
      <div class="container mx-auto px-12 pb-20">
        <div class="news-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          ${news.slice(0, itemsPerPage).map(article => createNewsCard(article)).join('')}
        </div>
        ${news.length > itemsPerPage ? `
          <div class="text-center">
            <button id="loadMoreNews" class="load-more">Load More</button>
          </div>
        ` : ''}
      </div>
    </main>
    ${createFooter()}
  `;

  const loadMoreBtn = document.querySelector('#loadMoreNews');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      currentPage++;
      loadMoreNews();
    });
  }

  setupMobileMenu();
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