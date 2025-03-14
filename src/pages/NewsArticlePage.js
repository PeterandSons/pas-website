import { createHeader } from '../components/Header.js';
import { createFooter } from '../components/Footer.js';
import { getNews } from '../utils/content.js';

function createSocialShareButtons() {
  return `
    <div class="flex space-x-4 mt-8">
      <a href="#" class="text-black hover:text-[#FFC900]">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      </a>
      <a href="#" class="text-black hover:text-[#FFC900]">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
        </svg>
      </a>
      <a href="#" class="text-black hover:text-[#FFC900]">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
      <a href="#" class="text-black hover:text-[#FFC900]">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      </a>
      <a href="#" class="text-black hover:text-[#FFC900]">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  `;
}

function createLatestNewsCard(article) {
  return `
    <div class="mb-8">
      <a href="/news/${article.slug}" data-navigo>
        <img src="${article.image}" alt="${article.title}" class="w-full h-32 object-cover mb-4">
      </a>
      <h3 class="text-white text-[16px] font-semibold mb-2">
        <a href="/news/${article.slug}" class="hover:text-[#FFC900]" data-navigo>${article.title}</a>
      </h3>
      <p class="text-[#FFC900] text-[12px] font-light">${article.date}</p>
    </div>
  `;
}

function formatContent(content) {
  if (!content) return '';
  return content.split('\n\n').map(paragraph => 
    `<p class="mb-4 leading-relaxed font-normal text-[0.8 rem]">${paragraph.trim()}</p>`
  ).join('');
}

export function renderNewsArticlePage(params) {
  const news = getNews();
  const article = news.find(n => n.slug === params.slug);
  const latestNews = news.filter(n => n.slug !== params.slug);
  const itemsPerPage = 3;
  let currentPage = 1;

  if (!article) {
    window.location.href = '/news';
    return;
  }

  document.querySelector('#app').innerHTML = `
    ${createHeader()}
    <main class="pt-32 pb-20 bg-black">
      <div class="container mx-auto px-12">
        <div class="flex flex-col lg:flex-row gap-12">
          <div class="lg:w-2/3">
            <div class="bg-white p-8">
              <h1 class="text-black text-3xl font-bold mb-6">${article.title}</h1>
              <p class="text-black text-sm font-light mb-6">${article.date}</p>
              <img src="${article.image}" alt="${article.title}" class="w-full h-auto mb-6">
              <div class="text-black">
                ${formatContent(article.fullContent || article.content)}
              </div>
              ${createSocialShareButtons()}
            </div>
          </div>
          <div class="lg:w-1/3">
            <h2 class="text-white text-xl font-bold mb-8">Latest News</h2>
            <div id="latestNewsContainer">
              ${latestNews.slice(0, itemsPerPage).map(createLatestNewsCard).join('')}
            </div>
            ${latestNews.length > itemsPerPage ? `
              <div class="text-center mt-8">
                <button id="loadMoreNews" class="load-more">Load More</button>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    </main>
    ${createFooter()}
  `;

  setupMobileMenu();
  setupLoadMore();

  function setupLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreNews');
    const container = document.getElementById('latestNewsContainer');
    
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        const startIndex = 0;
        const endIndex = currentPage * itemsPerPage;
        container.innerHTML = latestNews.slice(startIndex, endIndex).map(createLatestNewsCard).join('');
        
        if (endIndex >= latestNews.length) {
          loadMoreBtn.style.display = 'none';
        }
      });
    }
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