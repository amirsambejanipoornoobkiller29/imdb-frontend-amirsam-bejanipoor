export async function fetchBorn() {
  try {
    
    let data = await fetch("https://amirsambejanipoornoobkiller29.github.io/imdb-api-amirsambejanipoor/db.json");
    let res = await data.json();
   
    let born = res.borntoday.map(function (slide) {
      return `
                <div class="swiper-slide">
                <img src="${slide.image}" alt="${slide.image_alt}" />
                <h3>${slide.name}</h3>
                <h4>${slide.age}</h4>
              </div>
              `;
    });

   
    document
      .querySelectorAll(".born-today-container .swiper-wrapper")
      .forEach((wrapper) => {
        wrapper.innerHTML = born.join("");
      });
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchBorn();
