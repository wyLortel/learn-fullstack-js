const images = [
  "img/heroimage1.png",
  "img/heroimage2.png",
  "img/heroimage3.png"
];

let current = 0;
let showingFirst = true;
const img1 = document.getElementById("hero-img1");
const img2 = document.getElementById("hero-img2");

setInterval(() => {
  current = (current + 1) % images.length;

  if (showingFirst) {
    img2.src = images[current];
    img2.classList.add("active");
    img1.classList.remove("active");
  } else {
    img1.src = images[current];
    img1.classList.add("active");
    img2.classList.remove("active");
  }

  showingFirst = !showingFirst;
}, 3000);



