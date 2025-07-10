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

///////////////////////////////////////////////////////////
// CONTENT SECTION ANIMATION
///////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  // Zapisz czas trwania animacji z CSS (w milisekundach)
  // W naszym przypadku to 0.4s, czyli 400ms.
  const animationDuration = 400;

  const contentBoxes = document.querySelectorAll(".content-box");

  contentBoxes.forEach((boxToOpen) => {
    const tab = boxToOpen.querySelector(".content-box-tab");

    tab.addEventListener("click", function () {
      // Znajdź element, który jest aktualnie otwarty
      const currentlyOpenBox = document.querySelector(".content-box.open");

      // PRZYPADEK 1: Klikamy w ten sam element, który jest już otwarty
      // Po prostu go zamykamy.
      if (currentlyOpenBox && currentlyOpenBox === boxToOpen) {
        currentlyOpenBox.classList.remove("open");
      }
      // PRZYPADEK 2: Inny element jest otwarty
      // Zamykamy go, czekamy na koniec animacji i otwieramy nowy.
      else if (currentlyOpenBox) {
        // Najpierw zamknij stary element
        currentlyOpenBox.classList.remove("open");

        // Użyj setTimeout, aby opóźnić otwarcie nowego elementu
        setTimeout(() => {
          boxToOpen.classList.add("open");
        }, animationDuration);
      }
      // PRZYPADEK 3: Żaden element nie jest otwarty
      // Po prostu otwórz kliknięty element.
      else {
        boxToOpen.classList.add("open");
      }
    });
  });
});
