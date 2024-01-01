// CONTACT JS FILE

// Make image color when link area is hovered

const linkedInImage = document.getElementById('linkedIn-image');
const linkedInLink = document.getElementById('linkedIn-link');

const githubImage = document.getElementById('github-image');
const githubLink = document.getElementById('github-link');

const behanceImage = document.getElementById('behance-image');
const behanceLink = document.getElementById('behance-link');

const gmailImage = document.getElementById('gmail-image');
const gmailLink = document.getElementById('gmail-link');

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
