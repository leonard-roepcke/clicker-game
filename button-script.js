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
document.getElementById('worker').addEventListener('click', function() {
    if (parseFloat(localStorage.getItem('money')) >= 10) {
        let money = parseInt(localStorage.getItem('money')) || 0;
        money -= 10;
        localStorage.setItem('money', money);
        document.getElementById('money').textContent = money + "$";
        localStorage.setItem('worker', (parseInt(localStorage.getItem('worker')) || 0) + 1);
    }
});


setInterval(function() {
    let money = (parseInt(localStorage.getItem('money')) || 0) + (parseInt(localStorage.getItem('worker')) * 0.1 || 0);
    localStorage.setItem('money', money);
    document.getElementById('money').textContent = money + "$";
}, 1000);