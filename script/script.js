window.addEventListener("load", () => {
    document.querySelector(".header").classList.add("ativo");
});

let currentIndex = 0;
const items = document.querySelectorAll('.carrossel-item');
const totalItems = items.length;
const carrosselContainer = document.querySelector('.carrossel-container');

function showNext() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarrossel();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarrossel();
}

function updateCarrossel() {
  carrosselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.next').addEventListener('click', showNext);
document.querySelector('.prev').addEventListener('click', showPrev);
setInterval(showNext, 4000);

// Efeito do header na rolagem
let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  header.style.top = (currentScroll > lastScrollTop) ? "-100px" : "0";
  lastScrollTop = Math.max(currentScroll, 0);
});

function scrollCards(direction) {
  const containerCard = document.getElementById("cardContainer");
  const container = document.getElementById("cardContainer");
    const cardWidth = container.children[0].offsetWidth + 16; // inclui gap
    const maxIndex = container.children.length - 4; // só cabem 4 por vez

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

}