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

export function renderAboutPage() {
  document.querySelector('#app').innerHTML = `
    ${createHeader()}
    <main class="pt-24">
      <!-- Hero Banner -->
      <section class="relative h-[600px] bg-center bg-cover overflow-hidden" 
           style="background-image: url('/uploads/Header-image-main-02.png')">
        <div class="container mx-auto px-12 h-full flex items-center relative">
          <h1 class="text-[#FFC900] font-bold tracking-wider leading-none z-10">
            <span class="block text-6xl">BE THE</span>
            <span class="block text-8xl">GOAT</span>
          </h1>
          <div class="absolute inset-0 overflow-hidden">
            <!-- Back row characters -->
            <img src="/uploads/About-Characters-33-1508x2048.png" 
                 alt="Character" 
                 class="about-character back-left">
            <img src="/uploads/About-Header-Image-2.png" 
                 alt="Character" 
                 class="about-character back-right">
            
            <!-- Front row characters -->
            <img src="/uploads/About-Characters-34-1667x2048.png" 
                 alt="Character" 
                 class="about-character front-left">
            <img src="/uploads/About-Header-Image-1.png" 
                 alt="Character" 
                 class="about-character front-center">
            <img src="/uploads/About-Header-Image-3.png" 
                 alt="Character" 
                 class="about-character front-right">
          </div>
        </div>
      </section>

      <!-- Who Are We Section -->
      <section class="bg-black py-20">
        <div class="container mx-auto px-12 text-center max-w-4xl">
          <h2 class="text-white text-4xl font-bold mb-8">WHO ARE WE</h2>
          <p class="text-white text-lg leading-relaxed">
            We are Peter and Sons, an international game development studio transforming online gambling with our uniquely styled, high-performing video slots and casino games. Founded in 2019 by a team of international enthusiasts and professionals, we stand out from the crowd for our distinctive approach to casino game development.
          </p>
        </div>
      </section>

      ${createSkewedDivider('#000000', '#ffffff', 'down')}

      <!-- Licenses Section -->
      <section class="bg-white py-20">
        <div class="container mx-auto px-12 text-center max-w-4xl">
          <h2 class="text-black text-4xl font-bold mb-8">LICENCES</h2>
          <p class="text-black text-lg leading-relaxed">
            Peter and Sons serves the global gaming market, including the largest regulated markets, ensuring compliance with all regulatory requirements. We are certified in over 15 jurisdictions, meeting the highest industry standards for fair play, security, and responsible gambling.
          </p>
        </div>
      </section>

      ${createSkewedDivider('#ffffff', '#251e34', 'up')}

      <!-- Four Columns Section -->
      <section class="bg-[#251e34] py-20">
        <div class="container mx-auto px-12">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <!-- Column 1 -->
            <div class="text-center">
              <h3 class="text-[#FFC900] text-2xl font-bold mb-4">
                UNIQUE<br/>
                PLAYER<br/>
                EXPERIENCES
              </h3>
              <p class="text-white leading-relaxed">
                With world-class mechanics, our games offer an unparalleled gaming experience. Featuring innovative features, stunning graphics, and top-notch audio, our games are aimed to captivate players, enhance enjoyment, and drive long-term engagement, delivering substantial value for both players and operators.
              </p>
            </div>

            <!-- Column 2 -->
            <div class="text-center">
              <h3 class="text-[#FFC900] text-2xl font-bold mb-4">
                TAILORED<br/>
                FOR THE<br/>
                PLAYER
              </h3>
              <p class="text-white leading-relaxed">
                As a global team, we're all about crafting games for every player out there. With a new release each month, we're on a mission to expand the Peter & Sons universe, offering a diverse range of Slot Games, Scratch Cards and Instant Games, for every type of player and market.
              </p>
            </div>

            <!-- Column 3 -->
            <div class="text-center">
              <h3 class="text-[#FFC900] text-2xl font-bold mb-4">
                GLOBAL<br/>
                GAMING<br/>
                MARKET
              </h3>
              <p class="text-white leading-relaxed">
                Our proprietary framework for agile game development enables us to deploy effectively completely responsive cross-platform multi-language games in html5, and as native apps covering any regulatory requirement. We support over 40 languages and currencies, and our games are available with multiple RTPs.
              </p>
            </div>

            <!-- Column 4 -->
            <div class="text-center">
              <h3 class="text-[#FFC900] text-2xl font-bold mb-4">
                WINNING<br/>
                ALL<br/>
                TOGETHER
              </h3>
              <p class="text-white leading-relaxed">
                As true industry experts, your dedicated Account Manager will always be able to give you the best advice and guidance, helping you to plan your game releases and marketing campaigns, as well as training sessions for you and your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      ${createSkewedDivider('#251e34', '#ffffff', 'down')}

      <!-- Responsible Gaming Section -->
      <section class="bg-white py-20">
        <div class="container mx-auto px-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/uploads/gamble-aware.png" 
                   alt="Gamble Aware" class="w-full max-w-[300px]">
            </div>
            <div>
              <h2 class="text-black text-4xl font-bold mb-4">RESPONSIBLE GAMING</h2>
              <p class="text-black text-lg leading-relaxed">
                Peter & Sons are committed to responsible gambling and follow all regulatory requirements. For more information please see our regulatory policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      ${createSkewedDivider('#ffffff', '#000000', 'up')}

      <!-- Gaming Solution Section -->
      <section class="bg-black py-20">
        <div class="container mx-auto px-12">
          <h2 class="text-[#FFC900] text-4xl font-bold mb-12 text-center">YOUR ALL-IN-ONE GAMING SOLUTION</h2>
          <p class="text-white text-lg leading-relaxed text-center mb-16">
            Our platform is a simple all-in-one solution that's easy to integrate. Along with great gamification tools, this ensures a top-notch experience and lets us adapt to every market and operator need with speed and flexibility.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <!-- Column 1 -->
            <div class="text-center">
              <img src="/uploads/logo-3-1024x1024.png" 
                   alt="Remote Game Server" class="w-24 h-24 mx-auto mb-8">
              <h3 class="text-white text-2xl font-bold mb-6">Remote Game Server</h3>
              <ul class="text-white text-[14px] text-left list-disc pl-6 space-y-2">
                <li>Modular, microservices architechture</li>
                <li>Rich APIs and intergrations</li>
                <li>Intuitive, mobile friendly Back Office</li>
              </ul>
            </div>

            <!-- Column 2 -->
            <div class="text-center">
              <img src="/uploads/cloud-1-1024x1024.png" 
                   alt="Cloud Infrastructure" class="w-24 h-24 mx-auto mb-8">
              <h3 class="text-white text-2xl font-bold mb-6">Cloud Infrastructure</h3>
              <ul class="text-white text-[14px] text-left list-disc pl-6 space-y-2">
                <li>Auto-scalability handles traffic peaks</li>
                <li>Zero downtime deployments</li>
                <li>&lt;100ms average response time</li>
              </ul>
            </div>

            <!-- Column 3 -->
            <div class="text-center">
              <img src="/uploads/gamification-tools-1024x1024.png" 
                   alt="Gamification Tools" class="w-24 h-24 mx-auto mb-8">
              <h3 class="text-white text-2xl font-bold mb-6">Gamification Tools</h3>
              <p class="text-white text-[14px] leading-relaxed">
                We offer a gaming space that players love and keep coming back to. Our stellar promo tools, include Free Spins, Cash Drops, Tournaments, Jackpots, and more. Seamlessly connect with players and boost your sales!
              </p>
            </div>
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