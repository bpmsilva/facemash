// Initialize counters for left and right driver clicks
let leftDriverClicks = 0;
let rightDriverClicks = 0;

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function () {

    const leftImg = document.getElementById('left-img');
    const rightImg = document.getElementById('right-img');

    leftImg.addEventListener('click', function () {
        leftDriverClicks++;
        console.log('Left Driver Clicks:', leftDriverClicks);
    });

    rightImg.addEventListener('click', function () {
        rightDriverClicks++;
        console.log('Right Driver Clicks:', rightDriverClicks);
    });
});
