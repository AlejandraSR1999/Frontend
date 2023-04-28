const starsWrapper = document.querySelector(".stars-wrapper");
const numberOfStars = 50;

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 300 + "px";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 2 + "s";
    starsWrapper.appendChild(star);
}

