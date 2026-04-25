// dfe64df20e5048dc81abc33421bdfb23



const listRef = document.querySelector(".list")

let pageSize = 18;
let page = 1;

let totalPage = 0;

// function getNews(){
//     return fetch(`https://newsapi.org/v2/everything?q=tesla&from=2026-03-19&sortBy=publishedAt&apiKey=dfe64df20e5048dc81abc33421bdfb23&pageSize=${pageSize}&page=${page}`).then((res) => res.json())
// }


function getNews() {
    return fetch(`https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=dfe64df20e5048dc81abc33421bdfb23&pageSize=${pageSize}&page=${page}`)
    .then((res) => res.json());
}

getNews().then((res) => {
    createArticles(res.articles);
    totalPage = Math.ceil(res.totalResults / pageSize)
})






function createArticles(array) {
    const item = array.map(({author, content, description, title, publishedAt, urlToImage}) => {
        const imageUrl = urlToImage ? urlToImage : "https://hostiq.ua/wiki/wp-content/uploads/2021/05/03-error-404-not-found.png";
        return `<li class="item">
        <h2>${title}</h2>
        <h2>${author}</h2>
        <p>${publishedAt}</p>
        <img src="${imageUrl}" alt="${content}">
    </li>`
    }).join("")

    listRef.insertAdjacentHTML("beforeend", item)

}


const newsObserver = new IntersectionObserver((item, observer) => {
  item.forEach((itm) => {
    if(itm.isIntersecting){
       if (totalPage !== 0 && page >= totalPage) {
        newsObserver.unobserve(document.querySelector(".box"));
        return;
      }
      page += 1
      getNews().then((res) => {
    createArticles(res.articles);
   })
    }    
  })
  
    
}, {
    rootMargin: "250px"
}) 

newsObserver.observe(document.querySelector(".box"))





















// function createNewsItems(array){
//     const item = array.map(({author, title, description, content, publishedAt, urlToImage}) => {
//         console.log(urlToImage);
        
//         return ` <li class="item">
//   <h2>${title}</h2>
//   <h2>${author}</h2>
//   <p>${content}</p>
//   <p>${description}</p>
//   <p>${publishedAt}</p>
//   <img src="${urlToImage}" alt="${title}">
// </li>`
//     }).join("")
//     listRef.insertAdjacentHTML("beforeend", item);
// }