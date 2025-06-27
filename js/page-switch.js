
/*
    This module handles page's 
    state toggle
*/


document.querySelectorAll('.page').forEach(box => {
    box.addEventListener('click', () => {
        // Remove 'active' from all boxes
        document.querySelectorAll('.page').forEach(b => b.classList.remove('active'));

        // Add 'active' to the clicked box
        box.classList.add('active');
    });
});