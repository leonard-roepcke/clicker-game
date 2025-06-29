document.getElementById('bank').addEventListener('click', function() {
    var money = parseFloat(localStorage.getItem('money')) || 0;
    money += 1;
    localStorage.setItem('money', parseFloat(money));
    document.getElementById('money').innerText = localStorage.getItem('money') + "$";
});