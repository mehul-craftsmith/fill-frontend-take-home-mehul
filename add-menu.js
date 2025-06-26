
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.page-menu'); // or whatever your static parent is
    const timeouts = new Map();

    container.addEventListener('mouseenter', event => {
        const gap = event.target.closest('.gap-between-pages');
        if (!gap) return;

        // Remove from all
        document.querySelectorAll('.gap-between-pages').forEach(g => g.classList.remove('expand'));

        // Clear old timeout
        if (timeouts.has(gap)) {
            clearTimeout(timeouts.get(gap));
        }

        // Add class
        gap.classList.add('expand');

        // Set timeout to remove after 1.5s
        const timeoutId = setTimeout(() => {
            gap.classList.remove('expand');
            timeouts.delete(gap);
        }, 1500);

        timeouts.set(gap, timeoutId);
    }, true);
});
