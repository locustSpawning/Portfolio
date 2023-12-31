// HOME JS FILE

// Make border appear on image when hovering button

//Hens and Honey
const HensAndHoneyButton = document.getElementById('button-1');
const HensAndHoneyImage = document.getElementById('image-1');

HensAndHoneyButton.addEventListener('mouseover', () => {
    HensAndHoneyImage.style.border = '3px solid var(--clr-clear-white)';
});

HensAndHoneyButton.addEventListener('mouseout', () => {
    HensAndHoneyImage.style.border = 'none';
});

//Rosies
const RosieButton = document.getElementById('button-2');
const RosieImage = document.getElementById('image-2');

RosieButton.addEventListener('mouseover', () => {
    RosieImage.style.border = '3px solid var(--clr-clear-white)';
});

RosieButton.addEventListener('mouseout', () => {
    RosieImage.style.border = 'none';
});

//SJ Rescue
const SJRescueButton = document.getElementById('button-3');
const SJRescueImage = document.getElementById('image-3');

SJRescueButton.addEventListener('mouseover', () => {
    SJRescueImage.style.border = '3px solid var(--clr-clear-white)';
});

SJRescueButton.addEventListener('mouseout', () => {
    SJRescueImage.style.border = 'none';
});
