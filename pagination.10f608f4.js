let e=document.querySelector(".list"),t=1,n=0;function r(){return fetch(`https://pixabay.com/api/?key=55396511-9fa47eb753a2484966d5aafba&per_page=18&page=${t}`).then(e=>e.json())}function o(t){if(!t)return;let n=t.map(({tags:e,webformatURL:t,user:n})=>`<li class="item">
        <h2>${e}</h2>
        <h2>${n||"Unknown"}</h2>
        <img src="${t}" alt="${e}">
    </li>`).join("");e.insertAdjacentHTML("beforeend",n)}r().then(e=>{o(e.hits),n=Math.ceil(e.totalHits/18)});let i=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){if(0!==n&&t>=n)return void i.unobserve(document.querySelector(".box"));t+=1,r().then(e=>{o(e.hits)})}})},{rootMargin:"250px"});i.observe(document.querySelector(".box"));
//# sourceMappingURL=pagination.10f608f4.js.map
