
document.querySelectorAll('.page').forEach(page => {
    page.addEventListener('click', () => {
        // Remove active class and reset stroke for all pages
        document.querySelectorAll('.page').forEach(p => {
            p.classList.remove('active');
            const svg = p.querySelector('svg');
            const paths = svg?.querySelectorAll('path');
            paths.forEach((path) => {
                if (path) {
                    path.setAttribute('stroke', '#9DA4B2'); // grey
                    path.setAttribute('fill', 'transparent'); // optional
                }
            });
        });

        // Add active class to clicked page
        page.classList.add('active');
        const svg = page.querySelector('svg');
        const paths = svg?.querySelectorAll('path');
        paths.forEach((path) => {
            if (path) {
                path.setAttribute('stroke', '#F59D0E'); // orange
                path.setAttribute('fill', 'transparent'); // optional
            }
        });
    });
});