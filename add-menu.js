document.addEventListener("DOMContentLoaded", () => {
    const gaps = document.querySelectorAll('.gap-between-pages');
    const timeouts = new Map();

    gaps.forEach(gap => {
        gap.addEventListener('mouseenter', () => {
            gaps.forEach(g => g.classList.remove('expand'));

            // Clear any previous timeout for this gap
            if (timeouts.has(gap)) {
                clearTimeout(timeouts.get(gap));
            }

            gap.classList.add('expand');

            // Remove after 1.5 seconds
            const timeoutId = setTimeout(() => {
                gap.classList.remove('expand');
            }, 1500);

            // Save timeout id
            timeouts.set(gap, timeoutId);
        });
    });
});