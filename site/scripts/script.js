const IMAGES = [
    'albon.avif',
    'alonso.avif',
    'antonelli.avif',
    'bearman.avif',
    'bortoleto.avif',
    'colapinto.avif',
    'gasly.avif',
    'hadjar.avif',
    'hamilton.avif',
    'hulkenberg.avif',
    'lawson.avif',
    'leclerc.avif',
    'norris.avif',
    'ocon.avif',
    'piastri.avif',
    'russel.avif',
    'sainz.avif',
    'stroll.avif',
    'tsunoda.avif',
    'verstappen.avif'
];

const IMAGE_FOLDER = './assets/';

// Initialize counters for left and right driver clicks
let leftDriverClicks = 0;
let rightDriverClicks = 0;

// Save the initial state
let currLeftImage, currRightImage;

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function () {

    const leftImg = document.getElementById('left-img');
    const rightImg = document.getElementById('right-img');

    // Get two random images for the initial display
    const [leftElement, rightElement] = getTwoRandomImages();

    leftImg.src = IMAGE_FOLDER + leftElement;
    rightImg.src = IMAGE_FOLDER + rightElement;

    currLeftImage = IMAGE_FOLDER + leftElement;
    currRightImage = IMAGE_FOLDER + rightElement;

    leftImg.addEventListener('click', function () {
        leftDriverClicks++;

        let nextRightImage;
        let leftImgSrc = leftImg.src.split("/").pop();
        do {
            nextRightImage = getRandomImage();
        } while (getFileName(leftImgSrc) === getFileName(nextRightImage) || getFileName(nextRightImage) === getFileName(currRightImage));
        currRightImage = nextRightImage;
        rightImg.src = currRightImage;
        console.log('Left Driver Clicks:', leftDriverClicks);
    });

    rightImg.addEventListener('click', function () {
        rightDriverClicks++;

        let nextLeftImage;
        let rightImgSrc = rightImg.src.split("/").pop();
        do {
            nextLeftImage = getRandomImage();
        } while (getFileName(rightImgSrc) === getFileName(nextLeftImage) || getFileName(nextLeftImage) === getFileName(currLeftImage));
        currLeftImage = nextLeftImage;
        leftImg.src = currLeftImage;

        console.log('Right Driver Clicks:', rightDriverClicks);
    });
});

function getRandomImage() {
    return IMAGE_FOLDER + IMAGES[Math.floor(Math.random() * IMAGES.length)];
}

function getTwoRandomImages() {
    const shuffled = [...IMAGES].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
}

function getFileName(imagePath) {
    if (imagePath != undefined) {
        return imagePath.split('/').pop();
    }
    return '';
}
