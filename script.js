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
  active++
  if (active === 3) active = 0;
  changeDot();
  image.src = slideList[active].img;
  text.textContent = slideList[active].text;

}

setInterval(autoChange, time);