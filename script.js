"use strict";

const drobBtn = document.querySelectorAll("[data-user-img]");
const faqCard = document.querySelectorAll("[data-faq-card]");

function removeActive(elements) {
  elements.forEach((element) => {
    element.classList.remove("active");
  });
}

faqCard.forEach((card, index) => {
  drobBtn[index].addEventListener("click", () => {
    if (!drobBtn[index].classList.contains("active")) {
      removeActive(drobBtn);
      removeActive(faqCard);
      drobBtn[index].classList.add("active");
      faqCard[index].classList.add("active");
    } else {
      drobBtn[index].classList.remove("active");
      faqCard[index].classList.remove("active");
    }
  });
});
