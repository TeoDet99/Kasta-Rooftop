function lockActiveItem() {
    const navScroll = document.querySelector('.nav-bar .nav-scroll');
    const activeItem = document.querySelector('.nav-item.active');
    console.log(navScroll); // Διορθώθηκε το .Log σε .log
    console.log(activeItem); // Διορθώθηκε το .Log σε .log
    
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


// --- Κώδικας για το Logo ---
window.addEventListener('scroll', () => {
    const headerTop = document.querySelector('.header-top');
    if (headerTop) {
        headerTop.style.display = window.scrollY > 50 ? "none" : "flex";
    }
});


// --- Τροποποιημένος Loader & Εμφάνιση Popup ---
function hideLoader() {
    const loader = document.getElementById('loader');
    
    // Έλεγχος για να μην ξανατρέχει η συνάρτηση αν ο loader έχει ήδη ξεκινήσει να σβήνει
    if (loader && !loader.classList.contains('fade-out')) {
        loader.classList.add('fade-out');
        
        // Μόλις ολοκληρωθεί το animation του loader (0.8 δευτερόλεπτα)
        setTimeout(() => {
            loader.style.display = 'none';
            
            // ΕΔΩ ΕΝΕΡΓΟΠΟΙΕΙΤΑΙ ΤΟ POPUP
            const popup = document.getElementById('event-popup');
            if (popup) {
                popup.classList.add('show');
            }
        }, 800); // Από 5000ms το κάναμε 800ms για να συγχρονιστεί με το CSS σου
    }
}

// Μόλις φορτώσουν όλα (εικόνες, scripts)
window.addEventListener('load', hideLoader);

// ΔΙΚΛΕΙΔΑ ΑΣΦΑΛΕΙΑΣ: Αν μετά από 10 δευτερόλεπτα είναι ακόμα εκεί, κλείστον!
setTimeout(hideLoader, 10000);


// --- Κώδικας για το Ρολόι ---
function updateClock() {
    const now = new Date();
    const timeStr = now.getHours().toString().padStart(2, '0') + ":" + 
                    now.getMinutes().toString().padStart(2, '0') + ":" + 
                    now.getSeconds().toString().padStart(2, '0');
    
    const clockEl = document.getElementById('clock');
    if (clockEl) {
        clockEl.innerText = timeStr;
    }
}
setInterval(updateClock, 1000);
updateClock();


// --- Κώδικας για το Κλείσιμο του Popup (Κουμπί Χ και γύρω περιοχή) ---
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('event-popup');
    const closeBtn = document.querySelector('.popup-close-btn');

    if (popup && closeBtn) {
        // Κλείσιμο όταν πατάς το "Χ"
        closeBtn.addEventListener('click', () => {
            popup.classList.remove('show');
        });

        // Κλείσιμο όταν πατάς στο μαύρο φόντο έξω από την αφίσα
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.remove('show');
            }
        });
    }
});