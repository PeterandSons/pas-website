export function createFooter() {
  return `
    <footer class="site-footer">
      <div class="container mx-auto px-12">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div class="md:col-span-2">
            <img src="/uploads/P_S-Monogram-Purple.png" 
                 alt="Peter & Sons Monogram" 
                 class="w-24 h-24 mb-6">
            <p class="text-white text-sm font-light mb-4">We are a passionate team with a fresh-new vision for slots.</p>
          </div>
          <div class="md:col-span-2">
            <h3 class="text-white font-bold mb-4">Explore</h3>
            <ul class="space-y-2">
              <li><a href="/partners" class="text-white font-light hover:text-white" data-navigo>Partners</a></li>
              <li><a href="/contact" class="text-white font-light hover:text-white" data-navigo>Contact us</a></li>
              <li><a href="/careers" class="text-white font-light hover:text-white" data-navigo>Careers</a></li>
              <li><a href="/privacy" class="text-white font-light hover:text-white" data-navigo>Privacy statement</a></li>
            </ul>
          </div>
          <div class="md:col-span-5">
            <h3 class="text-white font-bold mb-4">Licenses</h3>
            <div class="grid grid-cols-3 gap-4 mb-4">
              <div class="flex items-center">
                <img src="/uploads/License_GC.png" 
                     alt="License GC" class="w-full h-auto">
              </div>
              <div class="flex items-center">
                <img src="/uploads/License_LOTBA.png" 
                     alt="License LOTBA" class="w-full h-auto">
              </div>
              <div class="flex items-center">
                <img src="/uploads/License_Spelinspektionen.png" 
                     alt="License Spelinspektionen" class="w-full h-auto max-h-[60px] object-contain">
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <img src="/uploads/License_AGCO.png" 
                   alt="License AGCO" class="w-full max-w-[200px] h-auto">
              <img src="/uploads/malta-gaming-authority-mga-vector-logo-3.png" 
                   alt="Malta Gaming Authority" class="w-full max-w-[200px] h-auto">
            </div>
          </div>
          <div class="md:col-span-3">
            <h3 class="text-white font-bold mb-4">Contact us</h3>
            <p class="text-white font-light mb-8">info@peterandsonsgames.com</p>
            <h3 class="text-white font-bold mb-4">Follow us</h3>
            <div class="flex space-x-4 mb-8">
              <a href="#" class="text-white hover:text-[#FFC900] transition-colors duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" class="text-white hover:text-[#FFC900] transition-colors duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="text-white hover:text-[#FFC900] transition-colors duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="#" class="text-white hover:text-[#FFC900] transition-colors duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <img src="/uploads/GambleAwareLogo.png" 
                 alt="Gamble Aware" class="w-32 h-auto">
          </div>
        </div>
      </div>
    </footer>
  `;
}