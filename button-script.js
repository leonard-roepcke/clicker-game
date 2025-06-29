document.getElementById('bank').addEventListener('click', function() {
    var money = parseFloat(localStorage.getItem('money')) || 0;
    localStorage.setItem('money', money + 1);
    document.getElementById('money').innerText = localStorage.getItem('money');
});