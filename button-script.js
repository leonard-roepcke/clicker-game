document.getElementById('reset').addEventListener('click', function() {
    let money = 0;
    localStorage.setItem('money', money);
    document.getElementById('money').textContent = money + "$";
});

document.getElementById('work').addEventListener('click', function() {
    let money = parseInt(localStorage.getItem('money')) || 0;
    money += 1;
    localStorage.setItem('money', money);
    document.getElementById('money').textContent = money + "$";
});

// Beim Laden der Seite aktuellen Wert anzeigen
window.onload = function() {
    let money = parseInt(localStorage.getItem('money')) || 0;
    document.getElementById('money').textContent = money + "$";
};