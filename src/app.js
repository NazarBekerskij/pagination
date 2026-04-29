const listRef = document.querySelector(".list");

let pageSize = 18;
let page = 1;
let totalPage = 0;

const API_KEY = "55396511-9fa47eb753a2484966d5aafba";

function getNews() {
  return fetch(`https://pixabay.com/api/?key=${API_KEY}&editors_choice=true&per_page=${pageSize}&page=${page}`)
    .then((res) => res.json());
}

getNews().then((res) => {
  createArticles(res.hits); 
  totalPage = Math.ceil(res.totalHits / pageSize); 
});

function createArticles(array) {
  if (!array) return;

  const item = array.map(({ tags, webformatURL, user }) => {
    const imageUrl = webformatURL
      ? webformatURL
      : "https://hostiq.ua/wiki/wp-content/uploads/2021/05/03-error-404-not-found.png";

    return `<li class="item">
        <h2>${tags}</h2>
        <h2>${user || "Unknown"}</h2>
        <img src="${imageUrl}" alt="${tags}">
    </li>`;
  }).join("");

  listRef.insertAdjacentHTML("beforeend", item);
}

const newsObserver = new IntersectionObserver((items) => {
  items.forEach((itm) => {
    if (itm.isIntersecting) {

      if (totalPage !== 0 && page >= totalPage) {
        newsObserver.unobserve(document.querySelector(".box"));
        return;
      }

      page += 1;

      getNews().then((res) => {
        createArticles(res.hits);
      });
    }
  });
}, {
  rootMargin: "250px"
});

newsObserver.observe(document.querySelector(".box"));