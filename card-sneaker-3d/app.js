// Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// Movement animation event
container.addEventListener('mousemove', (event) => {
  let eixoX = (window.innerWidth / 2 - event.pageX) / 15;
  let eixoY = (window.innerHeight / 2 - event.pageY) / 15;
  card.style.transform = `rotateY(${eixoX}deg) rotateX(${eixoY}deg)`;
});

// Animate in
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';

  // Poput
  title.style.transform = 'translateZ(15rem)';
  sneaker.style.transform = 'translateZ(20rem) rotateZ(-45deg)';
  description.style.transform = 'translateZ(12.5rem)';
  sizes.style.transform = 'translateZ(10rem)';
  purchase.style.transform = 'translateZ(7.5rem)';
})

// Animate out
container.addEventListener('mouseleave', (event) => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  // Popback
  title.style.transform = 'translateZ(0)';
  sneaker.style.transform = 'translateZ(0) rotateZ(0deg)';
  description.style.transform = 'translateZ(0)';
  sizes.style.transform = 'translateZ(0)';
  purchase.style.transform = 'translateZ(0)';
})
