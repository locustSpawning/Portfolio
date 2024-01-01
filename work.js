// WORK JS FILE

// Make arrow color when button area is hovered

const viewMoreBehance1 = document.getElementById('view-more-behance-button1');
const arrowBehance1 = document.getElementById('arrow-behance-1');
const arrowBehance2 = document.getElementById('arrow-behance-2');

viewMoreBehance1.addEventListener('mouseover', () => {
    arrowBehance1.style.display = 'none';
    arrowBehance2.style.display = 'inline';
});

viewMoreBehance1.addEventListener('mouseout', () => {
    arrowBehance1.style.display = 'inline';
    arrowBehance2.style.display = 'none';
});

arrowBehance1.addEventListener('mouseover', () => {
    arrowBehance1.style.display = 'none';
    arrowBehance2.style.display = 'inline';
    viewMoreBehance1.style.color = '#853785';
});

arrowBehance2.addEventListener('mouseout', () => {
    arrowBehance1.style.display = 'inline';
    arrowBehance2.style.display = 'none';
    viewMoreBehance1.style.color = '#e3e4f1';
});
