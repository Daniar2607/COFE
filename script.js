const carousel = document.getElementById('carousel');
const items = carousel.children;
let angle = 0;

document.getElementById('next').addEventListener('click', () => {
  angle -= 120;
  carousel.style.transform = `rotateY(${angle}deg)`;
});

document.getElementById('prev').addEventListener('click', () => {
  angle += 120;
  carousel.style.transform = `rotateY(${angle}deg)`;
});
