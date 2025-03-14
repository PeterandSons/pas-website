import { createHeader } from '../components/Header.js';
import { createFooter } from '../components/Footer.js';
import { getJobs } from '../utils/content.js';

export function renderJobDescriptionPage(params) {
  const jobs = getJobs();
  const job = jobs.find(j => j.title.toLowerCase().replace(/\s+/g, '-') === params.slug);

  if (!job) {
    window.location.href = '/careers';
    return;
  }

  document.querySelector('#app').innerHTML = `
    ${createHeader()}
    <main class="pt-32 bg-black">
      <!-- Hero Banner -->
      <div class="py-20 mb-20 bg-center bg-cover" style="background-image: url('https://peterandsonsgames.com/wp-content/uploads/2023/08/Footer-image-main-03-03-2.png'); background-size: 100% 100%; transform: scaleY(-1)">
        <div class="container mx-auto px-12" style="transform: scaleY(-1)">
          <div class="flex items-center">
            <div>
              <h1 class="text-[#FFC900] font-bold tracking-wider text-5xl mb-4">${job.title}</h1>
              <div class="flex items-center space-x-4">
                <div class="flex items-center text-white">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  ${job.location}
                </div>
                <div class="flex items-center text-white">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  ${job.type}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Job Description -->
      <section class="py-20">
        <div class="container mx-auto px-12">
          <div class="bg-black text-white prose prose-invert max-w-none">
            ${job.description}
          </div>
          <div class="mt-12 text-center">
            <a href="mailto:jobs@peterandsonsgames.com" class="inline-block bg-[#FFC900] text-black px-8 py-3 font-semibold hover:bg-[#e6b600] transition-colors duration-300">
              APPLY NOW
            </a>
          </div>
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