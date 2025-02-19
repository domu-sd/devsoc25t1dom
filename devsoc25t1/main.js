document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.stars');

    for (let i = 0; i < 250; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--twinkle-duration', `${Math.random() * 2 + 2}s`);
        starsContainer.appendChild(star);
    }
});