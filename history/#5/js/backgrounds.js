const images = [
  "0.webp",
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "4.webp",
  "5.webp",
  "6.webp",
  "7.webp",
  "8.webp",
  "9.webp",
  "10.webp",
  "11.webp",
];

const todayImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `imgs/${todayImage}`;
bgImage.classList.toggle("background");

document.body.appendChild(bgImage);
