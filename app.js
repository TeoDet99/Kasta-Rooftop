function lockActiveItem() {
    const navScroll = document.querySelector('.nav-bar .nav-scroll');
    const activeItem = document.querySelector('.nav-item.active');
    console.Log(navScroll);
    console.Log(activeItem);
    
    
    if (navScroll && activeItem) {
        // Βρίσκουμε την ακριβή απόσταση του επιλεγμένου στοιχείου (π.χ. Food) από την αρχή.
        // Αφαιρούμε 20 pixels (το padding) για να μην κολλάει το γράμμα ακριβώς στην άκρη της οθόνης.
        const exactPosition = activeItem.offsetLeft - 20;
        
        // Επιβάλλουμε ακαριαία το σκρολάρισμα σε αυτή τη θέση, χωρίς να ρωτήσουμε τον browser.
        navScroll.scrollLeft = exactPosition;
    }
}

// 1. Τρέχει αμέσως μόλις διαβαστεί η HTML
document.addEventListener('DOMContentLoaded', lockActiveItem);

// 2. Τρέχει ξανά όταν φορτώσουν πλήρως οι γραμματοσειρές (γιατί μπορεί να αλλάξουν τα πλάτη των λέξεων)
window.addEventListener('load', lockActiveItem);


// --- Κώδικας για το Logo (παραμένει ίδιος) ---
window.addEventListener('scroll', () => {
    const headerTop = document.querySelector('.header-top');
    if (headerTop) {
        headerTop.style.display = window.scrollY > 50 ? "none" : "flex";
    }
});

function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('fade-out');
        // Προαιρετικά, αφαιρούμε τελείως το στοιχείο μετά το εφέ για να μην εμποδίζει τα κλικ
        setTimeout(() => {
            loader.style.display = 'none';
        }, 5000); 
    }
}

// Μόλις φορτώσουν όλα (εικόνες, scripts)
window.addEventListener('load', hideLoader);

// ΔΙΚΛΕΙΔΑ ΑΣΦΑΛΕΙΑΣ: Αν μετά από 3 δευτερόλεπτα είναι ακόμα εκεί, κλείστον!
setTimeout(hideLoader, 10000);

 
        function updateClock() {
            const now = new Date();
            const timeStr = now.getHours().toString().padStart(2, '0') + ":" + 
                            now.getMinutes().toString().padStart(2, '0') + ":" + 
                            now.getSeconds().toString().padStart(2, '0');
            document.getElementById('clock').innerText = timeStr;
        }
        setInterval(updateClock, 1000);
        updateClock();
  
    