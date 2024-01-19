// CONTACT JS FILE

// Make image color when link area is hovered

const linkedInImage = document.getElementById('linkedIn-image');
const linkedInLink = document.getElementById('linkedIn-link');

const githubImage = document.getElementById('github-image');
const githubLink = document.getElementById('github-link');

const behanceImage = document.getElementById('behance-image');
const behanceLink = document.getElementById('behance-link');

const gmailImage = document.getElementById('gmail-image');
const gmailLink = document.getElementById('copy-gmail-btn');

linkedInLink.addEventListener('mouseover', () => {
    linkedInImage.style.filter =
        'invert(40%) sepia(20%) saturate(1220%) hue-rotate(359deg) brightness(141%) contrast(90%)';
});

linkedInLink.addEventListener('mouseout', () => {
    linkedInImage.style.filter = 'none';
});

githubLink.addEventListener('mouseover', () => {
    githubImage.style.filter =
        'invert(40%) sepia(20%) saturate(1220%) hue-rotate(359deg) brightness(141%) contrast(90%)';
});

githubLink.addEventListener('mouseout', () => {
    githubImage.style.filter = 'none';
});

behanceLink.addEventListener('mouseover', () => {
    behanceImage.style.filter =
        'invert(40%) sepia(20%) saturate(1220%) hue-rotate(359deg) brightness(141%) contrast(90%)';
});

behanceLink.addEventListener('mouseout', () => {
    behanceImage.style.filter = 'none';
});

gmailLink.addEventListener('mouseover', () => {
    gmailImage.style.filter =
        'invert(40%) sepia(20%) saturate(1220%) hue-rotate(359deg) brightness(141%) contrast(90%)';
});

gmailLink.addEventListener('mouseout', () => {
    gmailImage.style.filter = 'none';
});

gmailLink.addEventListener('mousedown', () => {
    gmailImage.style.filter =
        'invert(60%) sepia(23%) saturate(940%) hue-rotate(251deg) brightness(102%) contrast(74%)';
});

gmailLink.addEventListener('mouseup', () => {
    gmailImage.style.filter =
        'invert(40%) sepia(20%) saturate(1220%) hue-rotate(359deg) brightness(141%) contrast(90%)';
});

// Copy gmail to clipboard

let successDiv = document.getElementById('success-div');
let failDiv = document.getElementById('failed-div');

let currentDiv;

var delayInMilliseconds = 1000; //1 second

function fadeOut(currentDiv) {
    currentDiv.style.opacity = '0';
    currentDiv.style.transition = 'opacity 500ms';
}

let copyEmailButton = document.getElementById('copy-gmail-btn');
copyEmailButton.addEventListener('click', () => {
    navigator.clipboard.writeText('chelsleonhardt@gmail.com').then(
        () => {
            currentDiv = successDiv;
            successDiv.style.opacity = '1';
            successDiv.style.transition = 'opacity 300ms';
            setTimeout(fadeOut, delayInMilliseconds, currentDiv);
        },
        () => {
            currentDiv = failDiv;
            failDiv.style.opacity = '1';
            failDiv.style.transition = 'opacity 300ms';
        }
    );
});
