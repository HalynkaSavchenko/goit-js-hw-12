import{a as w,S,i as d}from"./assets/vendor-b42c18af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();async function m(o,t){document.querySelector(".loader").classList.remove("is-hidden");const r="42503060-b2c3bebb5268fd59c195d07ac",e="https://pixabay.com/api/",s=new URLSearchParams({key:r,q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t});return(await w.get(`${e}?${s}`)).data}const f=document.querySelector(".gallery");function h(o){const t=o.map(({webformatURL:i,largeImageURL:r,tags:e,likes:s,views:a,comments:L,downloads:b})=>`<li id = "item" class = "gallery-item">
        <a href="${r}">
             <img src="${i}" alt="${e}" width="360"/>
        </a>
        <ul class = "container-info">
           <li class = "info-item">
             <span><b>Likes</b></span>
             <p>${s}</p>
           </li>
           <li class = "info-item">
             <span><b>Views</b></span>
             <p>${a}</p>
           </li>
           <li class = "info-item"i>
             <span><b>Comments</b></span>
             <p>${L}</p>
           </li>
           <li class = "info-item">
             <span><b>Downloads</b></span>
             <p>${b}</p>
           </li>
        </ul>
     </li>`).join("");return f.insertAdjacentHTML("beforeend",t)}const p=document.querySelector(".search-form"),n=document.querySelector(".loader"),l=document.querySelector(".load-more");let u,c=1;const v=15,g=new S(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"top",showCounter:!1});function C(){const t=document.getElementById("item").getBoundingClientRect();if(t.height>0){let i=t.height*2;window.scrollBy({top:i,behavior:"smooth"})}}function y(o){const t=Math.ceil(o.totalHits/v);c>=t&&(l.classList.add("is-hidden"),c=1,d.info({message:"We're sorry, but you've reached the end of search results",fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:5e3,backgroundColor:"#9a75f7"}))}p.addEventListener("submit",P);async function P(o){if(o.preventDefault(),f.innerHTML="",u=o.target.elements.search.value.trim(),u.length===0)return n.classList.add("is-hidden"),l.classList.add("is-hidden"),d.error({message:"Please, enter search value",fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:5e3,backgroundColor:"#9a75f7"});try{const t=await m(u,c);if(t.hits.length===0)return n.classList.add("is-hidden"),d.error({message:"Sorry, there are no images matching your search query. Please try again!",fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:2e3,backgroundColor:"#9a75f7"});n.classList.add("is-hidden"),h(t.hits),g.refresh(),l.classList.remove("is-hidden"),y(t)}catch(t){return n.classList.add("is-hidden"),d.error({message:`'Oops... something went wrong' : ${t}`,fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:5e3,backgroundColor:"#9a75f7"})}finally{p.reset()}}l.addEventListener("click",$);async function $(){l.classList.add("is-hidden"),n.classList.remove("is-hidden"),c++;const o=await m(u,c);n.classList.add("is-hidden"),h(o.hits),C(),g.refresh(),l.classList.remove("is-hidden"),y(o)}
//# sourceMappingURL=commonHelpers.js.map
