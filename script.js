// Globální proměnná pro počet kliknutí (čítač)
let clickCount = 0;

// Aktualizuje zobrazenou hodnotu na stránce
function updateDisplay() {
    document.getElementById("counter").textContent = clickCount;
}

document.getElementById("btnKlikni").onclick = function() {
    clickCount++; // Zvýší hodnotu čítače o jedna
    updateDisplay();
}
document.getElementById("btnReset").onclick = function() {
    clickCount = 0; // Nastaví hodnotu čítače na 0
    updateDisplay();
}
 