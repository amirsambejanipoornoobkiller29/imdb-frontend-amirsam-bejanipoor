export async function fetchRecent() {
  try {
  
    let data = await fetch("https://amirsambejanipoornoobkiller29.github.io/imdb-api-amirsambejanipoor/db.json");
    let res = await data.json();
    
    let Recent = res.Recent.map(function (slide) {
      return `
                    <div class="swiper-slide">
                <img src="${slide.image_url}" alt="${slide.image_alt}" />
                <h3>${slide.title}</h3>
              </div>
                  `;
    });

   
    document
      .querySelectorAll(".recent-container .swiper-wrapper")
      .forEach((wrapper) => {
        wrapper.innerHTML = Recent.join("");
      });
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchRecent();
