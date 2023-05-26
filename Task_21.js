// ДЗ 22. Слайдер базовий

const images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];
let currentImageIndex = 0;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

function updateImages() {
    image1.src = images[currentImageIndex];
    image2.src = images[(currentImageIndex + 1) % images.length];
    image3.src = images[(currentImageIndex + 2) % images.length];

    image1.className = "active";
    image2.className = "next";
    image3.className = "prev";
}

prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImages();
});

nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImages();
});

updateImages();

