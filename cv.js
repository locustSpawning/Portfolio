// CV JS FILE

// Make arrow color when button area is hovered

const openPdfButton1 = document.getElementById('open-as-pdf-button1');
const arrowPdf1 = document.getElementById('arrow-pdf-1');
const arrowPdf2 = document.getElementById('arrow-pdf-2');

openPdfButton1.addEventListener('mouseover', () => {
    arrowPdf1.style.display = 'none';
    arrowPdf2.style.display = 'inline';
});

openPdfButton1.addEventListener('mouseout', () => {
    arrowPdf1.style.display = 'inline';
    arrowPdf2.style.display = 'none';
});

arrowPdf1.addEventListener('mouseover', () => {
    arrowPdf1.style.display = 'none';
    arrowPdf2.style.display = 'inline';
    openPdfButton1.style.color = '#853785';
});

arrowPdf2.addEventListener('mouseout', () => {
    arrowPdf1.style.display = 'inline';
    arrowPdf2.style.display = 'none';
    openPdfButton1.style.color = '#e3e4f1';
});
