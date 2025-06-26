document.querySelectorAll('.gap-between-pages').forEach(gap => {
    gap.addEventListener('mouseenter', () => {
        console.log('Hovered in the gap between the two divs!');
    });
});
