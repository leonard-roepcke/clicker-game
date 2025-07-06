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

    let worker_nr = parseInt(localStorage.getItem('worker')) || 0;
    document.getElementById('worker_nr').textContent = worker_nr + "/inf"
};
document.getElementById('worker').addEventListener('click', function() {
    if (parseFloat(localStorage.getItem('money')) >= 100) {
        let money = parseInt(localStorage.getItem('money')) || 0;
        money -= 100;
        localStorage.setItem('money', money);
        document.getElementById('money').textContent = money + "$";
        localStorage.setItem('worker', (parseInt(localStorage.getItem('worker')) || 0) + 1);
    }
    let worker_nr = parseInt(localStorage.getItem('worker')) || 0;
    document.getElementById('worker_nr').textContent = worker_nr + "/inf"
});

document.getElementById('hierer').addEventListener('click', function() {
    if (parseFloat(localStorage.getItem('money')) >= 100) {
        let money = parseInt(localStorage.getItem('money')) || 0;
        money -= 10000;
        localStorage.setItem('money', money);
        document.getElementById('money').textContent = money + "$";
        localStorage.setItem('hierer', (parseInt(localStorage.getItem('hierer')) || 0) + 1);
    }
});

setInterval(function() {
    let money = (parseInt(localStorage.getItem('money')) || 0) + (parseInt(localStorage.getItem('worker')) * 1 || 0);
    localStorage.setItem('money', money);
    let worker_nr = parseInt(localStorage.getItem('worker')) || 0;
    let hierer = parseInt(localStorage.getItem('hierer')) || 0;
    if(money >= 100*hierer){
        money -= 100*hierer;
        localStorage.setItem('worker', (parseInt(localStorage.getItem('worker')) || 0) + hierer);
        localStorage.setItem('money',  money);
    }
    document.getElementById('worker_nr').textContent = worker_nr + "/inf"
    document.getElementById('money').textContent = money + "$";
    
    
}, 1000);