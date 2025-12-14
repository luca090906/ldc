document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Prüfe gespeicherten Modus oder nutze System-Präferenz
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Setze initialen Modus
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
        body.classList.add('dark-mode');
        toggleButton.innerHTML = '<span class="icon">☀️</span>'; // Sonnensymbol
    } else {
        toggleButton.innerHTML = '<span class="icon">🌙</span>'; // Mondsymbol
    }

    // Event Listener für den Klick
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            toggleButton.innerHTML = '<span class="icon">☀️</span>';
        } else {
            localStorage.setItem('theme', 'light');
            toggleButton.innerHTML = '<span class="icon">🌙</span>';
        }
    });
});