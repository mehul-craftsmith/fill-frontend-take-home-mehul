document.addEventListener("DOMContentLoaded", () => {
    const gaps = document.querySelectorAll('.gap-between-pages');

    gaps.forEach(gap => {
        gap.addEventListener('mouseenter', () => {
            gaps.forEach(g => g.classList.remove('expand'));
            gap.classList.add('expand');

            // Remove after 1.5 seconds
            setTimeout(() => {
                gap.classList.remove('expand');
            }, 1500);
        });
    });
});