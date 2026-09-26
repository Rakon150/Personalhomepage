const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const f = btn.dataset.filter;
        cards.forEach((card) => {
            const tags = (card.dataset.tags || '').split(' ');
            const show = f === 'all' || tags.includes(f);
            card.style.display = show ? '' : 'none';
        });
    });
});