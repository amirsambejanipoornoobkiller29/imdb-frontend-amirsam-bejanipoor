


import { setupNavigation } from "./Navigation.js";
import { setupBackToTop } from "./BackToTop.js";
import { fetchBanner } from "./Banner.js";
fetchBanner();
import { fetchUpNext } from "./Upnext.js";
fetchUpNext();
import { fetchFeaturedToday } from "./FeaturedToday.js";
fetchFeaturedToday();
import { fetchPopularActors } from "./Popularactors.js";
fetchPopularActors();
import { fetchTopTen } from "./TopTen.js";
fetchTopTen();
import { fetchInterest } from "./Intrest.js";
fetchInterest();
import { fetchBorn } from "./BornToday.js";
fetchBorn();
import { fetchMoreExplore } from "./MoreExplore.js";
fetchMoreExplore()
import { fetchExclusive } from "./Exclusive.js";
fetchExclusive()
import { fetchBoxOffice } from "./BoxOffice.js";
fetchBoxOffice()
import { fetchNews } from "./news.js";
fetchNews()
import { fetchRecent } from "./Recent.js";
fetchRecent()

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupBackToTop();

  
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      
      setupNavigation();
    }, 250);
  });
});
