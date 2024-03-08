import{a as L,S,i as l}from"./assets/vendor-b42c18af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();async function f(s,t){document.querySelector(".loader").classList.remove("is-hidden");const r="42503060-b2c3bebb5268fd59c195d07ac",e="https://pixabay.com/api/",o=new URLSearchParams({key:r,q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t});return(await L.get(`${e}?${o}`)).data}const m=document.querySelector(".gallery");function p(s){const t=s.map(({webformatURL:n,largeImageURL:r,tags:e,likes:o,views:a,comments:y,downloads:b})=>`<li class = "gallery-item">
        <a href="${r}">
             <img src="${n}" alt="${e}" width="360"/>
        </a>
        <ul class = "container-info">
           <li class = "info-item">
             <span><b>Likes</b></span>
             <p>${o}</p>
           </li>
           <li class = "info-item">
             <span><b>Views</b></span>
             <p>${a}</p>
           </li>
           <li class = "info-item"i>
             <span><b>Comments</b></span>
             <p>${y}</p>
           </li>
           <li class = "info-item">
             <span><b>Downloads</b></span>
             <p>${b}</p>
           </li>
        </ul>
     </li>`).join("");return m.insertAdjacentHTML("beforeend",t)}const w=document.querySelector(".search-form"),u=document.querySelector(".loader"),i=document.querySelector(".load-more");document.querySelector("gallery-item");let c,d=1,v=15;const h=new S(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"top",showCounter:!1});function g(s){const t=Math.ceil(s.totalHits/v);d>t&&(i.classList.add("is-hidden"),l.info({message:"We're sorry, but you've reached the end of search results",fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:5e3,backgroundColor:"#9a75f7"}))}w.addEventListener("submit",P);async function P(s){if(s.preventDefault(),m.innerHTML="",c=s.target.elements.search.value.trim(),c.length===0)return i.classList.add("is-hidden"),l.error({message:"Please, enter search value",fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:5e3,backgroundColor:"#9a75f7"});try{const t=await f(c,d);if(t.hits.length===0)return l.error({message:"Sorry, there are no images matching your search query. Please try again!",fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:2e3,backgroundColor:"#9a75f7"});u.classList.add("is-hidden"),p(t.hits),h.refresh(),i.classList.remove("is-hidden"),g(t)}catch(t){return l.error({message:`'Oops... something went wrong' : ${t}`,fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:5e3,backgroundColor:"#9a75f7"})}}i.addEventListener("click",$);async function $(){i.classList.add("is-hidden"),u.classList.remove("is-hidden"),d++;const s=await f(c,d);u.classList.add("is-hidden"),p(s.hits),h.refresh(),i.classList.remove("is-hidden"),g(s)}
//# sourceMappingURL=commonHelpers.js.map
