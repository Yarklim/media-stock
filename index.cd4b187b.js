!function(){var e=document.querySelector("[data-header]");window.addEventListener("scroll",(function(){e.classList[window.scrollY>50?"add":"remove"]("active")}));var t=document.documentElement,a=window.matchMedia("(prefers-color-scheme: dark)").matches;localStorage.getItem("theme")?t.dataset.theme=localStorage.getItem("theme"):t.dataset.theme=a?"dark":"light";var o=function(){a=localStorage.getItem("theme"),localStorage.setItem("theme","light"===a?"dark":"light"),t.dataset.theme=localStorage.getItem("theme")};window.addEventListener("load",(function(){document.querySelector("[data-theme-toggler").addEventListener("click",o)}))}();
//# sourceMappingURL=index.cd4b187b.js.map
