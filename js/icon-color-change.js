
const activePage = document.querySelectorAll('.page.active');
if(activePage instanceof Element) {
    const svgImg = activePage.querySelector('svg');
    const path = svgImg.querySelector('path');

    // Make active icon yellow
    path.setAttribute('fill', 'transparent');
    path.setAttribute('stroke', '#F59D0E');
}
