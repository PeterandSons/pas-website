import { createHeader } from '../components/Header.js';
import { createFooter } from '../components/Footer.js';

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

function createContactForm() {
  return `
    <form class="space-y-6">
      <div>
        <input type="text" id="name" name="name" placeholder="Name" required
               class="w-full border border-gray-300 p-3 focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50">
      </div>
      <div>
        <input type="email" id="email" name="email" placeholder="Email" required
               class="w-full border border-gray-300 p-3 focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50">
      </div>
      <div>
        <input type="text" id="subject" name="subject" placeholder="Subject" required
               class="w-full border border-gray-300 p-3 focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50">
      </div>
      <div>
        <textarea id="message" name="message" rows="4" placeholder="Message" required
                  class="w-full border border-gray-300 p-3 focus:border-[#FFC900] focus:ring focus:ring-[#FFC900] focus:ring-opacity-50"></textarea>
      </div>
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input type="checkbox" id="privacy" name="privacy" required
                 class="h-4 w-4 border border-gray-300 text-[#FFC900] focus:ring-[#FFC900]">
        </div>
        <div class="ml-3">
          <label for="privacy" class="text-sm text-white">
            I have read and agree to the privacy policy
          </label>
        </div>
      </div>
      <button type="submit"
              class="w-full py-2 px-4 border border-transparent text-sm font-medium text-black bg-[#FFC900] hover:bg-[#e6b600] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFC900]">
        Send
      </button>
    </form>
  `;
}

function createSocialIcons() {
  return `
    <div class="flex justify-center space-x-8">
      <a href="#" class="text-white hover:text-[#FFC900] transition-colors duration-300">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      </a>
      <a href="#" class="text-white hover:text-[#FFC900] transition-colors duration-300">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>
      <a href="#" class="text-white hover:text-[#FFC900] transition-colors duration-300">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      </a>
      <a href="#" class="text-white hover:text-[#FFC900] transition-colors duration-300">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
    </div>
  `;
}

export function renderContactPage() {
  document.querySelector('#app').innerHTML = `
    ${createHeader()}
    <main class="pt-32 bg-black">
      <!-- Hero Banner -->
      <div class="py-20 mb-20 bg-center bg-cover" style="background-image: url('/uploads/Footer-image-main-03-03-2.png'); background-size: 100% 100%; transform: scaleY(-1)">
        <div class="container mx-auto px-12 text-center" style="transform: scaleY(-1)">
          <h1 class="text-white text-5xl font-bold tracking-wider uppercase">CONTACT</h1>
        </div>
      </div>

      <!-- Form Section -->
      <section class="py-20">
        <div class="container mx-auto px-12">
          <h2 class="text-[#FFC900] text-4xl font-bold tracking-wider uppercase text-center mb-8">GET IN TOUCH</h2>
          <div class="text-center mb-16">
            <p class="text-white text-lg">We would love to hear from you. Send us a message or email us at:</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Info Column -->
            <div class="bg-white p-8">
              <!-- Email Addresses -->
              <div class="mb-12">
                <div class="flex items-center mb-4">
                  <svg class="w-6 h-6 text-gray-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:info@peterandsonsgames.com" class="text-gray-700 hover:text-[#FFC900] transition-colors duration-300">info@peterandsonsgames.com</a>
                </div>
                <div class="flex items-center mb-4">
                  <svg class="w-6 h-6 text-gray-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:jobs@peterandsonsgames.com" class="text-gray-700 hover:text-[#FFC900] transition-colors duration-300">jobs@peterandsonsgames.com</a>
                </div>
                <div class="flex items-center">
                  <svg class="w-6 h-6 text-gray-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:sales@peterandsonsgames.com" class="text-gray-700 hover:text-[#FFC900] transition-colors duration-300">sales@peterandsonsgames.com</a>
                </div>
              </div>

              <!-- Office Addresses -->
              <h3 class="text-gray-700 font-semibold mb-6 text-lg">Office Addresses:</h3>
              <div class="grid grid-cols-2 gap-8">
                <!-- Barcelona Office -->
                <div>
                  <div class="flex items-start mb-2">
                    <svg class="w-6 h-6 text-gray-700 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <div>
                      <h4 class="text-gray-700 font-semibold text-lg mb-2">Barcelona</h4>
                      <p class="text-gray-600">
                        C/ Enamorats<br>
                        99-101-103<br>
                        Local 1<br>
                        08026,<br>
                        Barcelona<br>
                        Spain
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Yerevan Office -->
                <div>
                  <div class="flex items-start mb-2">
                    <svg class="w-6 h-6 text-gray-700 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <div>
                      <h4 class="text-gray-700 font-semibold text-lg mb-2">Yerevan</h4>
                      <p class="text-gray-600">
                        Baghramyan<br>
                        21, 89<br>
                        0019,<br>
                        Yerevan<br>
                        Armenia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Form Column -->
            <div>
              ${createContactForm()}
            </div>
          </div>
        </div>
      </section>

      ${createSkewedDivider('#000000', '#ffffff', 'down')}

      <!-- Maps Section -->
      <section class="bg-white py-20">
        <div class="container mx-auto px-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Barcelona Map -->
            <div>
              <div class="w-full h-[400px] mb-6">
                <iframe loading="lazy" src="https://maps.google.com/maps?q=C%2F%20Enamorats%2099-101-103%2C%20Local%201%2008026%2C%20Barcelona%2C%20Spain&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near" title="C/ Enamorats 99-101-103, Local 1 08026, Barcelona, Spain" aria-label="C/ Enamorats 99-101-103, Local 1 08026, Barcelona, Spain" width="100%" height="100%" style="border:0;" allowfullscreen=""></iframe>
              </div>
              <div class="flex items-start">
                <svg class="w-6 h-6 text-gray-700 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <h4 class="text-gray-700 text-xl font-bold mb-2">Barcelona</h4>
                  <p class="text-gray-600">
                    C/ Enamorats<br>
                    99-101-103, Local 1<br>
                    08026, Barcelona, Spain
                  </p>
                </div>
              </div>
            </div>

            <!-- Yerevan Map -->
            <div>
              <div class="w-full h-[400px] mb-6">
<iframe
  loading="lazy"
  src="https://maps.google.com/maps?q=Yerevan%2C%200019%2C%20Baghramyan%2021%2C%2089%2C%20Armenia&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"
  title="Yerevan, 0019, Baghramyan 21, 89, Armenia"
  aria-label="Yerevan, 0019, Baghramyan 21, 89, Armenia"
  width="100%"
  height="100%"
  style="border:0;"
  allowfullscreen=""
></iframe>
              </div>
              <div class="flex items-start">
                <svg class="w-6 h-6 text-gray-700 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <h4 class="text-gray-700 text-xl font-bold mb-2">Yerevan</h4>
                  <p class="text-gray-600">
                    Yerevan, 0019,<br>
                    Baghramyan 21, 89<br>
                    Armenia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      ${createSkewedDivider('#ffffff', '#000000', 'up')}

      <!-- Social Media Section -->
      <section class="py-20">
        <div class="container mx-auto px-12 text-center">
          <h2 class="text-[#FFC900] text-4xl font-bold tracking-wider uppercase leading-none">
            <span class="block">FOLLOW</span>
            <span class="block -mt-2">OUR</span>
            <span class="block -mt-2">SOCIALS</span>
          </h2>
          <div class="mt-8">
            ${createSocialIcons()}
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