!function(){var e=document.querySelector("[data-header]");window.addEventListener("scroll",(function(){e.classList[window.scrollY>50?"add":"remove"]("active")})),document.querySelectorAll("[data-ripple]").forEach((function(e){e.addEventListener("pointerdown",(function(e){e.stopImmediatePropagation();var t=document.createElement("div");t.classList.add("ripple"),this.appendChild(t);var a=function(){t.animate({opacity:0},{fill:"forwards",duration:200}),setTimeout((function(){t.remove()}),1e3)};if(this.addEventListener("pointerup",a),this.addEventListener("pointerleave",a),!this.classList.contains("icon-btn")){var n=Math.max(this.clientWidth,this.clientHeight);t.style.top="".concat(e.layerY,"px"),t.style.left="".concat(e.layerX,"px"),t.style.width="".concat(n,"px"),t.style.height="".concat(n,"px")}}))}));var t=document.documentElement,a=window.matchMedia("(prefers-color-scheme: dark)").matches;localStorage.getItem("theme")?t.dataset.theme=localStorage.getItem("theme"):t.dataset.theme=a?"dark":"light";var n=function(){a=localStorage.getItem("theme"),localStorage.setItem("theme","light"===a?"dark":"light"),t.dataset.theme=localStorage.getItem("theme")};function c(e,t,a){e.forEach((function(e){return e.addEventListener(t,a)}))}window.addEventListener("load",(function(){document.querySelector("[data-theme-toggler").addEventListener("click",n)}));var r=document.querySelectorAll("[data-search-toggler]"),o=document.querySelector("[data-search-view]");c(r,"click",(function(){return o.classList.toggle("show")}));var l=document.querySelector("[data-search-field]"),s=document.querySelector("[data-search-clear-btn]");""===l.value&&s.classList.add("clear-btn-none"),l.addEventListener("input",(function(){""===l.value?s.classList.add("clear-btn-none"):s.classList.remove("clear-btn-none")})),s.addEventListener("click",(function(){l.value="",s.classList.add("clear-btn-none")}));var i,d,u,m,h=document.querySelector("[data-segment='search']"),v=h.querySelector("[data-segment-btn].selected");window.searchType=v.dataset.segmentValue,d=function(e){return window.searchType=e},u=(i=h).querySelectorAll("[data-segment-btn]"),m=i.querySelector("[data-segment-btn].selected"),c(u,"click",(function(){m.classList.remove("selected"),this.classList.add("selected"),m=this,d(this.dataset.segmentValue)}))}();
//# sourceMappingURL=index.f3f09561.js.map