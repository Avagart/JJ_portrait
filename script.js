const imageElement = document.getElementById('image');
const totalImages = 26;
const delay = 100; // Verzögerung in Millisekunden (0.1 Sekunden)

let currentImageIndex = 1;
let direction = 1; // 1 für vorwärts, -1 für rückwärts

function updateImage() {
    if (currentImageIndex >= totalImages && direction === 1) {
        direction = -1; // Wechsel zu rückwärts
    } else if (currentImageIndex <= 1 && direction === -1) {
        direction = 1; // Wechsel zu vorwärts
    }

    imageElement.src = `images/image${currentImageIndex}.png`;
    currentImageIndex += direction;
}

setInterval(updateImage, delay);