const image = document.querySelector('.slider');
const text = document.querySelector('.text');
const dots = document.querySelectorAll('.dots span');

const slideList = [{
    img: "img/imgFirst.jpg",
    text: 'First text',
  },
  {
    img: "img/imgSecond.jpg",
    text: 'Second text',
  },
  {
    img: "img/imgThird.jpg",
    text: 'Third text',
  }
]

//Interface
const time = 3000;
let active = 0;

//Imptementation
const changeDot = () => {
  const activeDot = [...dots].findIndex(hadDot => hadDot.classList.contains('active'));
  dots[activeDot].classList.remove('active');
  dots[active].classList.add('active');
}

const autoChange = () => {
  if (active === 2) active = -1;
  active++
  changeDot();
  image.src = slideList[active].img;
  text.textContent = slideList[active].text;

}

const keyChangeSlide = (event) => {
  switch (event.keyCode) {
    case 37:
      clearInterval(slideInterval);
      active--;
      break;
    case 39:
      clearInterval(slideInterval);
      active++;
      break;
  }
  if (active === slideList.length) {
    active = 0;
  } else if (active === -1) {
    active = slideList.length - 1;
  }
  changeDot();
  image.src = slideList[active].img;
  text.textContent = slideList[active].text;
  slideInterval = setInterval(autoChange, time);
}

let slideInterval = setInterval(autoChange, time);
window.addEventListener('keydown', keyChangeSlide);