export async function fetchNews() {
  try {
   
    let data = await fetch("https://amirsambejanipoornoobkiller29.github.io/imdb-api-amirsambejanipoor/db.json");
    let res = await data.json();
    
    let news = res.news.map(function (slide) {
      return `
                  <div class="swiper-slide">
                <div class="news-info">
                  <img src="${slide.image_url}" />
                  <div class="news-det">
                    <h2>${slide.description}</h2>
                    <p>${slide.subtitle}</p>
                  </div>
                </div>
              </div>
                `;
    });

    
    document
      .querySelectorAll(".news-container .swiper-wrapper")
      .forEach((wrapper) => {
        wrapper.innerHTML = news.join("");
      });
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchNews();
