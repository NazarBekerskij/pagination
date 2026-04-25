let e=document.querySelector(".list"),t=1,n=0;function o(){return fetch(`https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=dfe64df20e5048dc81abc33421bdfb23&pageSize=18&page=${t}`).then(e=>e.json())}function r(t){let n=t.map(({author:e,content:t,description:n,title:o,publishedAt:r,urlToImage:i})=>`<li class="item">
        <h2>${o}</h2>
        <h2>${e}</h2>
        <p>${r}</p>
        <img src="${i||"https://hostiq.ua/wiki/wp-content/uploads/2021/05/03-error-404-not-found.png"}" alt="${t}">
    </li>`).join("");e.insertAdjacentHTML("beforeend",n)}o().then(e=>{r(e.articles),n=Math.ceil(e.totalResults/18)});let i=new IntersectionObserver((e,s)=>{e.forEach(e=>{if(e.isIntersecting){if(0!==n&&t>=n)return void i.unobserve(document.querySelector(".box"));t+=1,o().then(e=>{r(e.articles)})}})},{rootMargin:"250px"});i.observe(document.querySelector(".box"));
//# sourceMappingURL=pagination.3132acdb.js.map
