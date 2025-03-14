import { createHeader } from '../components/Header.js';
import { createFooter } from '../components/Footer.js';
import { getGames, getNews, getPartners } from '../utils/content.js';

const coreValues = [
  {
    title: "CREATIVE TO\nTHE CORE",
    text: "Creativity is not just what we do, it's how we do it. Trying new things, pushing boundaries for players and keeping the games industry moving forward."
  },
  {
    title: "ANTI\nBORING",
    text: "Life's too short to be another games company doing more of the same. Peter & Sons is here to carve our own path, stand out from the crowd and make our mark."
  },
  {
    title: "LASER\nFOCUSED",
    text: "No stone is left unturned in our pursuit of perfection for our games. We're laser focussed on the details that make a difference to our partners and players."
  },
  {
    title: "EASY\nDOES IT",
    text: "We're easy to work with and get the job done. We makes games that are easy to spot, easy to play and easy to enjoy."
  }
];

function createSkewedDivider(fromColor, toColor, direction = 'up') {
  const skewDirection = direction === 'up' ? '-skew-y-2' : 'skew-y-2';
  const translateY = 'translate-y-1/2';
  
  return `
    <div class="relative h-32 overflow-hidden -mt-16 -mb-16">
      <div class="absolute inset-0" style="background-color: ${fromColor}"></div>
      <div class="absolute inset-0 transform ${skewDirection} ${translateY} origin-center" style="background-color: ${toColor}"></div>
    </div>
  `;
}

function createHero() {
  return `
<section class="relative h-screen">
  <div class="hero-video-container">
    <iframe 
      class="hero-video w-full h-full absolute top-0 left-0"
      width="1386" 
      height="780" 
      src="https://www.youtube.com/embed/86Er55mto7w?autoplay=1&loop=1&mute=1&playlist=86Er55mto7w" 
      title="P&amp;S" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen>
    </iframe>
  </div>
</section>
  `;
}

function createNextSection() {
  return `
    <section class="py-20 bg-black">
      <div class="container mx-auto px-12">
        <h2 class="hero-title mb-16">
          <span class="block">CREATE</span>
          <span class="block">THE</span>
          <span class="block">NEXT</span>
        </h2>
        <p class="next-section-text">
          We're on a mission to set a new standard in the games industry and push the boundaries in how games look and feel. To build brands that truly engage players, igniting their desire and making them want to come back for more. It's not just about the games — it's about how we do it. Our team of specialists collaborate in creatively-led squads, bringing together our unique talents to make each game the very best.
        </p>
      </div>
    </section>
  `;
}

function createGameCard(game) {
  return `
    <div class="game-card">
      <div class="game-card-background" style="background-image: url('${game.thumbnailBackground}')"></div>
      <div class="game-card-overlay">
        <img src="${game.thumbnailLogo}" alt="${game.title}" class="game-card-logo">
      </div>
    </div>
  `;
}

function createGamesSection(games) {
  const latestGames = games.slice(0, 3);
  
  return `
    <section id="games" class="py-32">
      <div class="container mx-auto px-4">
        <div class="games-grid mb-16">
          ${latestGames.map(game => createGameCard(game)).join('')}
        </div>
        <div class="text-center">
          <a href="/games" class="load-more inline-block" data-navigo onclick="window.scrollTo({top: 0, behavior: 'smooth'})">All Games</a>
        </div>
      </div>
    </section>
  `;
}

function createCoreValuesSection() {
  const formatTitle = (title) => {
    const [line1, line2] = title.split('\n');
    return `
      <div class="hero-title mb-4">
        <span class="block">${line1}</span>
        <span class="block">${line2}</span>
      </div>
    `;
  };

  return `
    <section class="py-20 bg-black">
      <div class="container mx-auto px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        ${coreValues.map(value => `
          <div class="text-center">
            ${formatTitle(value.title)}
            <p class="text-white font-normal">${value.text}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function createNewsCard(article) {
  return `
    <div class="bg-black">
      <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-white text-[18px] font-semibold mb-2">${article.title}</h3>
        <p class="text-[#FFC900] text-[12px] font-light mb-3">${article.date}</p>
        <p class="text-white text-[14px] font-light">${article.content}</p>
      </div>
    </div>
  `;
}

function createNewsSection(news) {
  return `
    <section id="news" class="py-20" style="background-color: #251e34">
      <div class="container mx-auto px-12">
        <h2 class="hero-title mb-12">LATEST NEWS</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          ${news.slice(0, 3).map(article => createNewsCard(article)).join('')}
        </div>
        <div class="text-center">
          <a href="/news" class="load-more inline-block" data-navigo onclick="window.scrollTo({top: 0, behavior: 'smooth'})">More News</a>
        </div>
      </div>
    </section>
  `;
}

function createAmbitionSection() {
  return `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-12 text-center">
        <h2 class="ambition-title mb-16">
          <span class="block">OUR</span>
          <span class="block">ULTIMATE</span>
          <span class="block">AMBITION</span>
        </h2>
        <p class="ambition-text">
          To unleash our creativity and create the next generation of gambling games. Always pushing to dream bigger, go further and do better, for our player community, our commercial partners and each other.
        </p>
      </div>
    </section>
  `;
}

function createPartnersSection(partners) {
  const initialPartners = partners.slice(0, 10);
  return `
    <section id="partners" class="py-20 bg-black">
      <div class="container mx-auto px-12">
        <h2 class="hero-title mb-12">PARTNERS</h2>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          ${initialPartners.map(partner => `
            <div class="flex items-center justify-center">
              <img src="${partner.logo}" alt="${partner.name}" class="w-[600px] max-w-full h-auto transition-opacity duration-300 hover:opacity-70">
            </div>
          `).join('')}
        </div>
        <div class="text-center">
          <a href="/partners" class="load-more inline-block" data-navigo onclick="window.scrollTo({top: 0, behavior: 'smooth'})">Show More</a>
        </div>
      </div>
    </section>
  `;
}

export function renderHomePage() {
  const games = getGames();
  const news = getNews();
  const partners = getPartners();

  document.querySelector('#app').innerHTML = `
    ${createHeader()}
    <main>
      ${createHero()}
      ${createNextSection()}
      ${createGamesSection(games)}
      ${createCoreValuesSection()}
      ${createSkewedDivider('#000000', '#251e34', 'down')}
      ${createNewsSection(news)}
      ${createSkewedDivider('#251e34', '#ffffff', 'up')}
      ${createAmbitionSection()}
      ${createSkewedDivider('#ffffff', '#000000', 'down')}
      ${createPartnersSection(partners)}
    </main>
    ${createFooter()}
  `;

  setupInteractiveFeatures();
}

function setupInteractiveFeatures() {
  setupLoadMore();
  setupMobileMenu();
}

function setupLoadMore() {
  const loadMoreBtn = document.getElementById('loadMore');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      // Add your load more logic here
      const gamesGrid = document.querySelector('.games-grid');
      // Add more game cards to the grid
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