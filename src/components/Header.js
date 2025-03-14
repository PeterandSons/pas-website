export function createHeader() {
  return `
    <header class="fixed w-full bg-black/95 backdrop-blur-sm z-50">
      <nav class="container mx-auto px-12 py-8">
        <div class="flex justify-between items-center">
          <a href="/" class="w-52" data-navigo>
            <img src="/uploads/PS-Logo-02.png" alt="Peter and Sons Games" class="w-full">
          </a>
          <button class="hamburger-menu lg:hidden" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div class="nav-links hidden lg:flex space-x-12">
            <a href="/games" class="nav-link" data-navigo>Games</a>
            <a href="/news" class="nav-link" data-navigo>News</a>
            <a href="/about" class="nav-link" data-navigo>About</a>
            <a href="/careers" class="nav-link" data-navigo>Careers</a>
            <a href="/partners" class="nav-link" data-navigo>Partners</a>
            <a href="/contact" class="nav-link" data-navigo>Contact</a>
          </div>
        </div>
        <div class="mobile-menu hidden">
          <div class="flex flex-col space-y-6 py-8">
            <a href="/games" class="nav-link" data-navigo>Games</a>
            <a href="/news" class="nav-link" data-navigo>News</a>
            <a href="/about" class="nav-link" data-navigo>About</a>
            <a href="/careers" class="nav-link" data-navigo>Careers</a>
            <a href="/partners" class="nav-link" data-navigo>Partners</a>
            <a href="/contact" class="nav-link" data-navigo>Contact</a>
          </div>
        </div>
      </nav>
    </header>
  `;
}