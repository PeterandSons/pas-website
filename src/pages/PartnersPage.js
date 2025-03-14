import { createHeader } from '../components/Header.js';
import { createFooter } from '../components/Footer.js';
import { getPartners, getFriends } from '../utils/content.js';

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

function createLogoGrid(items, currentCount = 10) {
  return `
    <div class="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
      ${items.slice(0, currentCount).map(item => `
        <div class="flex items-center justify-center">
          <a href="${item.website}" target="_blank" rel="noopener noreferrer">
            <img src="${item.logo}" alt="${item.name}" class="w-full h-auto hover:opacity-80 transition-opacity duration-300 cursor-pointer">
          </a>
        </div>
      `).join('')}
    </div>
  `;
}


function createContactForm() {
  return `
    <form class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-white">Name</label>
        <input type="text" id="name" name="name" required
               class="mt-1 block w-full border-gray-300 shadow-sm focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50">
      </div>
      <div>
        <label for="company" class="block text-sm font-medium text-white">Name of Company</label>
        <input type="text" id="company" name="company" required
               class="mt-1 block w-full border-gray-300 shadow-sm focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50">
      </div>
      <div>
        <label for="website" class="block text-sm font-medium text-white">Website</label>
        <input type="url" id="website" name="website" required
               class="mt-1 block w-full border-gray-300 shadow-sm focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50">
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-white">Email Address</label>
        <input type="email" id="email" name="email" required
               class="mt-1 block w-full border-gray-300 shadow-sm focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50">
      </div>
      <div>
        <label for="message" class="block text-sm font-medium text-white">Message</label>
        <textarea id="message" name="message" rows="4" required
                  class="mt-1 block w-full border-gray-300 shadow-sm focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50"></textarea>
      </div>
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input type="checkbox" id="privacy" name="privacy" required
                 class="h-4 w-4 border-gray-300 text-[#FFC900] focus:ring-[#FFC900]">
        </div>
        <div class="ml-3">
          <label for="privacy" class="text-sm text-white">
            I have read and agree to the privacy policy
          </label>
        </div>
      </div>
      <button type="submit"
              class="w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-black bg-[#FFC900] hover:bg-[#e6b600] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFC900]">
        Send
      </button>
    </form>
  `;
}

export function renderPartnersPage() {
  const partners = getPartners();
  const friends = getFriends();
  let partnersCount = 10;
  let friendsCount = 10;

  document.querySelector('#app').innerHTML = `
    ${createHeader()}
    <main class="pt-32 bg-black">
      <!-- Hero Banner -->
      <div class="news-title-container py-20 mb-20 bg-center bg-cover" style="background-image: url('/uploads/Footer-image-main-03-03-2.png'); background-size: 100% 100%; transform: scaleY(-1)">
        <div class="container mx-auto px-12 text-center" style="transform: scaleY(-1)">
          <h1 class="text-white text-5xl font-bold tracking-wider uppercase">Partners</h1>
        </div>
      </div>

      <!-- Partners Section -->
      <section class="py-20">
        <div class="container mx-auto px-12">
          <p class="text-white text-lg text-center mb-16 max-w-4xl mx-auto">
            Creating games for some of the biggest brands and governments in the iGaming industry, we are expanding into new jurisdictions and closing new partner deals all the time.
          </p>
          <div id="partnersGrid" class="mb-8">
            ${createLogoGrid(partners, partnersCount)}
          </div>
          ${partners.length > partnersCount ? `
            <div class="text-center">
              <button id="loadMorePartners" class="load-more">Show More</button>
            </div>
          ` : ''}
        </div>
      </section>

      ${createSkewedDivider('#000000', '#251e34', 'up')}

      <!-- Contact Form Section -->
      <section class="bg-[#251e34] py-20">
        <div class="container mx-auto px-12">
          <h2 class="text-[#FFC900] text-4xl font-bold mb-4 text-center">Media Partners</h2>
          <p class="text-white text-lg text-center mb-16">Partner with us for early access to marketing materials, latest news, and more!</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/uploads/affiliates-page-image.png" 
                   alt="Contact Us" class="w-full h-auto">
            </div>
            <div class="bg-[#251e34] p-8 rounded-lg">
              <p class="text-white text-lg mb-8">Please fill out the form to get access to our game assets.</p>
              ${createContactForm()}
            </div>
          </div>
        </div>
      </section>

      ${createSkewedDivider('#251e34', '#000000', 'down')}

      <!-- Brand Assets Section -->
      <section class="py-20">
        <div class="container mx-auto px-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/uploads/White-1-1024x196.png" 
                   alt="Brand Assets" class="w-full h-auto">
            </div>
            <div class="flex flex-col space-y-4">
              <button class="w-full py-3 px-6 bg-black text-white border-2 border-white font-bold hover:bg-white hover:text-black transition-colors duration-300">
                Brand Guidelines
              </button>
              <button class="w-full py-3 px-6 bg-black text-white border-2 border-white font-bold hover:bg-white hover:text-black transition-colors duration-300">
                Brand Assets
              </button>
            </div>
          </div>
        </div>
      </section>

      ${createSkewedDivider('#000000', '#ffffff', 'up')}

      <!-- Friends Section -->
      <section class="bg-white py-20">
        <div class="container mx-auto px-12">
          <h2 class="text-black text-4xl font-bold mb-4 text-center">Our Friends</h2>
          <p class="text-black text-lg text-center mb-12">Some of the fantastic Media partners we currently work with:</p>
          <div id="friendsGrid" class="mb-8">
            ${createLogoGrid(friends, friendsCount)}
          </div>
          ${friends.length > friendsCount ? `
            <div class="text-center">
              <button id="loadMoreFriends" class="px-16 py-5 bg-transparent border-2 border-black text-black text-base font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300">Show More</button>
            </div>
          ` : ''}
        </div>
      </section>

      ${createSkewedDivider('#ffffff', '#000000', 'down')}

      <!-- Contact Info Section -->
      <section class="bg-black py-20">
        <div class="container mx-auto px-12 text-center">
          <p class="text-[#FFC900] text-lg mb-4">We are always open for exciting new partnerships and collaborations.</p>
          <p class="text-white text-lg mb-2">If you have any questions or feedback, please contact us on:</p>
          <a href="mailto:affiliates@peterandsongames.com" class="text-white underline text-lg hover:text-[#FFC900] transition-colors duration-300">
            affiliates@peterandsongames.com
          </a>
        </div>
      </section>
    </main>
    ${createFooter()}
  `;

  setupLoadMore(partners, friends);
  setupMobileMenu();
}

function setupLoadMore(partners, friends) {
  let partnersCount = 10;
  let friendsCount = 10;

  const loadMorePartnersBtn = document.getElementById('loadMorePartners');
  const loadMoreFriendsBtn = document.getElementById('loadMoreFriends');

  if (loadMorePartnersBtn) {
    loadMorePartnersBtn.addEventListener('click', () => {
      partnersCount += 10;
      document.getElementById('partnersGrid').innerHTML = createLogoGrid(partners, partnersCount);
      if (partnersCount >= partners.length) {
        loadMorePartnersBtn.style.display = 'none';
      }
    });
  }

  if (loadMoreFriendsBtn) {
    loadMoreFriendsBtn.addEventListener('click', () => {
      friendsCount += 10;
      document.getElementById('friendsGrid').innerHTML = createLogoGrid(friends, friendsCount);
      if (friendsCount >= friends.length) {
        loadMoreFriendsBtn.style.display = 'none';
      }
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