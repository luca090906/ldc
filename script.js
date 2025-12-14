document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    
    // 1. Hole den gespeicherten Modus
    const storedTheme = localStorage.getItem('theme');
    
    // 2. Setze den Modus: Standard ist Light Mode, falls nicht 'dark' gespeichert ist.
    if (storedTheme === 'dark') {
        body.classList.add('dark-mode');
        // Ändere Icon zu Sonne, da wir jetzt im dunklen Modus sind
        if (toggleButton) {
            toggleButton.innerHTML = '<span class="icon">☀️</span>'; 
        }
    } else {
        // Starte im Light Mode (Standard)
        localStorage.setItem('theme', 'light');
        if (toggleButton) {
            toggleButton.innerHTML = '<span class="icon">🌙</span>'; 
        }
    }

    // 3. Event Listener für den Klick (nur wenn Button existiert)
    if (toggleButton) {
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
    }
});
