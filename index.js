// HOME JS FILE

// Make border appear on image when hovering button

//Rosies
const RosieButton = document.getElementById('button-rosies');
const RosieImage = document.getElementById('image-rosies');

RosieButton.addEventListener('mouseover', () => {
    RosieImage.style.border = '3px solid var(--clr-clear-white)';
});

RosieButton.addEventListener('mouseout', () => {
    RosieImage.style.border = 'none';
});

//In Bloom
const BloomButton = document.getElementById('button-bloom');
const BloomImage = document.getElementById('image-bloom');

BloomButton.addEventListener('mouseover', () => {
    BloomImage.style.border = '3px solid var(--clr-clear-white)';
});

BloomButton.addEventListener('mouseout', () => {
    BloomImage.style.border = 'none';
});

//Hens and Honey
const HensAndHoneyButton = document.getElementById('button-honey');
const HensAndHoneyImage = document.getElementById('image-honey');

HensAndHoneyButton.addEventListener('mouseover', () => {
    HensAndHoneyImage.style.border = '3px solid var(--clr-clear-white)';
});

HensAndHoneyButton.addEventListener('mouseout', () => {
    HensAndHoneyImage.style.border = 'none';
});

//Depth
const DepthButton = document.getElementById('button-depth');
const DepthImage = document.getElementById('image-depth');

DepthButton.addEventListener('mouseover', () => {
    DepthImage.style.border = '3px solid var(--clr-clear-white)';
});

DepthButton.addEventListener('mouseout', () => {
    DepthImage.style.border = 'none';
});

//SJ Rescue
const SJRescueButton = document.getElementById('button-rescue');
const SJRescueImage = document.getElementById('image-rescue');

SJRescueButton.addEventListener('mouseover', () => {
    SJRescueImage.style.border = '3px solid var(--clr-clear-white)';
});

SJRescueButton.addEventListener('mouseout', () => {
    SJRescueImage.style.border = 'none';
});
