"use script";

///////////////////////////////////////////////////////////
// STICKY NAVIGATION
///////////////////////////////////////////////////////////
const heroSectionEl = document.querySelector(".hero-section");
console.log(heroSectionEl);

const observe = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) document.body.classList.add("sticky");
    else document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-64px",
  }
);
observe.observe(heroSectionEl);
// console.log(observe);
