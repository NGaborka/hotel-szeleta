const imgWrapper = document.querySelector(".img-wrapper");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let angle = 0;

prev.addEventListener("click", function() {
    angle += 45;
    updateTransform();
});

next.addEventListener("click", function() {
    angle -= 45;
    updateTransform();
});

function updateTransform() {
    imgWrapper.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
}

function openIframeAndShowText(content, text) {
    document.getElementById('contentFrame').src = content;
    const iframeszoveg = document.getElementById('iframeszoveg');
    iframeszoveg.innerText = text;
    iframeszoveg.style.display = 'block';
}
