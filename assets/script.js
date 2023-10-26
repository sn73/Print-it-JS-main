const slides = [
   {
      image: "slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
   },
   {
      image: "slide2.jpg",
      tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
   },
   {
      image: "slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
   },
   {
      image: "slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
   },
];

let position = 0;
let path = "./assets/images/slideshow/";
const bannerimg = document.querySelector(".banner-img")
const bannertext = document.querySelector("#banner p")
const fGauche = document.querySelector(".arrow_left");
const fDroite = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");

fGauche.addEventListener("click", function() {
	position--;
	if(position < 0) {
		position = slides.length - 1;
	}
	console.log(position);
	changeContent(position);
	addDots();
})

fDroite.addEventListener("click", () => {
	position++;
	if(position > (slides.length - 1)) {
		position = 0;
	}
	console.log(position);
	changeContent(position);
	addDots();
})

function changeContent(param) {
	bannerimg.src = path + slides[param].image;
	bannertext.innerHTML = slides[param].tagLine
}
changeContent(position);
addDots();

function addDots() {
	dots.innerHTML = "";
	for (let i = 0; i < slides.length; i++) {
		if (i == position) {
			dots.innerHTML += "<div class='dot dot_selected'></div>";
		} else {
			dots.innerHTML += "<div class='dot'></div>";
		}
	}
}