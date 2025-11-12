export async function fetchInterest() {
  try {
   
    let data = await fetch("https://amirsambejanipoornoobkiller29.github.io/imdb-api-amirsambejanipoor/db.json");
    let res = await data.json();
   
    let interest = res.interest.map(function (slide) {
      return `
                <div class="swiper-slide">
                <img src="${slide.imageUrl}" alt="${slide.altText}" />
                <h3>${slide.titleText}</h3>
              </div>
              `;
    });

    
    document
      .querySelectorAll(".popular-interests-container .swiper-wrapper")
      .forEach((wrapper) => {
        wrapper.innerHTML = interest.join("");
      });
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchInterest();
