let e=document.querySelector(".list"),t=1,n=0;function r(){return fetch(`https://gnews.io/api/v4/search?q=tesla&lang=en&max=18&page=${t}&apikey=9a420d5dc04e57775b18d56d070814d6`).then(e=>e.json())}function i(t){if(!t)return;let n=t.map(({title:e,description:t,publishedAt:n,image:r,source:i})=>`<li class="item">
        <h2>${e}</h2>
        <h2>${i?.name||"Unknown"}</h2>
        <p>${n}</p>
        <img src="${r||"https://hostiq.ua/wiki/wp-content/uploads/2021/05/03-error-404-not-found.png"}" alt="${t}">
    </li>`).join("");e.insertAdjacentHTML("beforeend",n)}r().then(e=>{i(e.articles),n=Math.ceil(e.totalArticles/18)});let o=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){if(0!==n&&t>=n)return void o.unobserve(document.querySelector(".box"));t+=1,r().then(e=>{i(e.articles)})}})},{rootMargin:"250px"});o.observe(document.querySelector(".box"));
//# sourceMappingURL=pagination.cb5c1029.js.map
