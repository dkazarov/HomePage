"use strict";

function observerScroll() {
  const additionally = document.querySelector(".additionally");

  var options = {
    rootMargin: "0px",
    threshold: 1,
  };

  const callback = function (entries, observer) {
    entries.forEach((entry) => {
      const { education, target, isIntersecting, intersectionRatio } = entry;

      if (isIntersecting && intersectionRatio === 1) {
        target.classList.add("fade-in");
      } else {
        target.classList.remove("fade-in");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(additionally);
}

export default observerScroll;
