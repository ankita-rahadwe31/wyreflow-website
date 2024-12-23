// For the first video in #page2left
const videoLeft = document.querySelector('#page2left video');

document.querySelector('#page2left').addEventListener('mouseenter', () => {
    videoLeft.play();
});

document.querySelector('#page2left').addEventListener('mouseleave', () => {
    videoLeft.pause();
});

// For the second video in #page2right
const videoRight = document.querySelector('#page2right video');

document.querySelector('#page2right').addEventListener('mouseenter', () => {
    videoRight.play();
});

document.querySelector('#page2right').addEventListener('mouseleave', () => {
    videoRight.pause();
});

