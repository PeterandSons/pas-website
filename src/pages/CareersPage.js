import { createHeader } from '../components/Header.js';
import { createFooter } from '../components/Footer.js';
import { getJobs } from '../utils/content.js';

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

const jobIcons = {
  'Account Manager': ' /uploads/Job-image-4.png',
  '2D Spine Animator': '/uploads/Job-image-2.png',
  'Full Stack Developer': '/uploads/Job-image-1.png',
  'Marketing Artist': '/uploads/Job-image-2.png',
  'Designer / Mathematician': '/uploads/Job-image-3.png',
  'Game Programmer': '/uploads/Job-image-1.png',
  'Senior Artist': '/uploads/Job-image-2.png'
};

function createJobCard(job) {
  const icon = jobIcons[job.title] || jobIcons['Account Manager'];
  
  return `
    <div class="bg-white p-8">
      <div class="flex items-start gap-6">
        <img src="${icon}" alt="${job.title} icon" class="w-16 h-16 object-contain">
        <div class="flex-1">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">${job.title}</h3>
          <div class="flex items-center space-x-4 mb-4">
            <div class="flex items-center text-gray-600">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              ${job.location}
            </div>
            <div class="flex items-center text-gray-600">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              ${job.type}
            </div>
          </div>
          <div class="prose prose-sm max-h-32 overflow-hidden mb-4">
            ${job.description.split('</h2>')[0].replace('<h2>', '')}...
          </div>
          <a href="/careers/${job.title.toLowerCase().replace(/\s+/g, '-')}" class="inline-block bg-[#FFC900] text-black px-6 py-2 font-semibold hover:bg-[#e6b600] transition-colors duration-300" data-navigo>
            READ MORE / APPLY
          </a>
        </div>
      </div>
    </div>
  `;
}

export function renderCareersPage() {
  const jobs = getJobs();

  document.querySelector('#app').innerHTML = `
    ${createHeader()}
    <main class="pt-32 bg-black">
      <!-- Hero Banner -->
      <div class="py-0 mb-0 bg-center bg-cover relative overflow-hidden" style="background-image: url('/uploads/Header-image-main-02.png'); background-size: 100% 200%; transform: scaleY(-1)">
        <div class="container mx-0 px-12 relative" style="transform: scaleY(-1)">
          <div class="flex justify-between items-center">
            <h1 class="text-[#FFC900] font-bold tracking-wider leading-none">
              <span class="block text-6xl">JOIN THE</span>
              <span class="block text-8xl">TEAM</span>
            </h1>
            <div class="character-container">
              <img 
                src="/uploads/abrakadabra_dood.png" 
                alt="Character" 
                class="w-[800px] h-auto transform translate-y-full animate-slide-up"
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Growing Team Section -->
      <section class="py-20">
        <div class="container mx-auto px-12">
          <h2 class="text-[#FFC900] text-4xl font-bold mb-8">A GROWING TEAM</h2>
          <p class="text-white text-lg max-w-3xl">
            At Peter & Sons, we're not just crafting exceptional games; we're dedicated to cultivating an extraordinary team! We take pride in fostering a friendly and ever-evolving workspace, where innovation and creativity aren't just welcomed—they're cheered on with excitement!
          </p>
        </div>
      </section>

      ${createSkewedDivider('#000000', '#ffffff', 'down')}

      <!-- Peter Wins Section -->
      <section class="bg-white py-20">
        <div class="container mx-auto px-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-black text-4xl font-bold mb-8">PETER WINS YOU WIN!</h2>
              <p class="text-black text-lg">
                Ever dreamed of working in a vibrant, creative environment with a company that prioritizes personal growth? We are constantly searching for top-tier talent. Check for our open positions today and explore the exciting opportunities waiting for you!
              </p>
            </div>
            <div>
              <img src="/uploads/careers-rhino.png" alt="Peter & Sons Rhino" class="w-full h-auto">
            </div>
          </div>
        </div>
      </section>

      ${createSkewedDivider('#ffffff', '#000000', 'up')}

      <!-- Open Positions -->
      <section class="bg-black py-20">
        <div class="container mx-auto px-12">
          <h2 class="text-[#FFC900] text-4xl font-bold mb-12 text-center">Open Positions</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            ${jobs.map(job => createJobCard(job)).join('')}
          </div>
          <p class="text-white text-lg text-center">
            Currently no positions in your field? We're always on the hunt for the right people. If you are Interested in a career with Peter & Sons, please send an email with your CV, portfolio and resume to: <a href="mailto:jobs@peterandsonsgames.com" class="text-white underline hover:text-[#FFC900] transition-colors duration-300">jobs@peterandsonsgames.com</a>
          </p>
        </div>
      </section>
    </main>
    ${createFooter()}
  `;

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