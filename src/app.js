const listRef = document.querySelector(".list");

let pageSize = 18;
let page = 1;
let totalPage = 0;

function getNews() {
  return fetch(`https://gnews.io/api/v4/search?q=tesla&lang=en&max=${pageSize}&page=${page}&apikey=9a420d5dc04e57775b18d56d070814d6`)
    .then((res) => res.json());
}




getNews().then((res) => {
  createArticles(res.articles);
  totalPage = Math.ceil(res.totalArticles / pageSize);
});

function createArticles(array) {
  if (!array) return;

  const item = array.map(({ title, description, publishedAt, image, source }) => {
    const imageUrl = image
      ? image
      : "https://hostiq.ua/wiki/wp-content/uploads/2021/05/03-error-404-not-found.png";

    return `<li class="item">
        <h2>${title}</h2>
        <h2>${source?.name || "Unknown"}</h2>
        <p>${publishedAt}</p>
        <img src="${imageUrl}" alt="${description}">
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
        createArticles(res.articles);
      });
    }
  });
}, {
  rootMargin: "250px"
});

newsObserver.observe(document.querySelector(".box"));