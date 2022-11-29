const images = ["0.webp", "1.webp", "2.webp", "3.webp", "4.webp"];

const todayImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `imgs/${todayImage}`;

document.body.appendChild(bgImage);
