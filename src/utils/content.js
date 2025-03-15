// Import all JSON files from content directories
const gamesContext = import.meta.glob('../../content/games/*.json', { eager: true });
const newsContext = import.meta.glob('../../content/news/*.json', { eager: true });
const partnersContext = import.meta.glob('../../content/partners/*.json', { eager: true });
const jobsContext = import.meta.glob('../../content/jobs/*.json', { eager: true });

let games = [];
let news = [];
let partners = [];
let friends = [];
let jobs = [];

// Initialize data
function initializeData() {
  try {
    // Process games
    games = Object.values(gamesContext).map(module => module.default || module);

    // Process news
    news = Object.values(newsContext).map(module => module.default || module);

    // Process partners and friends
    Object.values(partnersContext).forEach(module => {
      const data = module.default || module;
      if (data.title === "Partners" && data.partners) {
        partners = data.partners; // Extract partners from partners.json
      }
      if (data.title === "Friends" && data.partners) {
        friends = data.partners; // Extract friends from friends.json
      }
    });

    // Process jobs
    jobs = Object.values(jobsContext).map(module => module.default || module);
  } catch (error) {
    console.error('Error initializing data:', error);
  }
}

// Initialize data when the module loads
initializeData();

export function getGames() {
  return games.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
}

export function getNews() {
  return news.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPartners() {
  return partners;
}

export function getFriends() {
  return friends;
}

export function getJobs() {
  return jobs;
}

// Export the initialization function in case it needs to be called again
export function refreshData() {
  initializeData();
}