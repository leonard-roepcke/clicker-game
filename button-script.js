document.getElementById('reset').addEventListener('click', function() {
    money = parseFloat(0);
    localStorage.setItem('money', parseFloat(money));
    document.getElementById('money').textContent = localStorage.getItem('money') + "$";
});
document.getElementById('bank').addEventListener('click', function() {
    var money = parseFloat(localStorage.getItem('money')) || 0;
    money += 1;
    localStorage.setItem('money', parseFloat(money));
    document.getElementById('money').textContent = localStorage.getItem('money') + "$";
});