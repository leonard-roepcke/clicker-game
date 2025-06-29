document.getElementById('bank').addEventListener('click', function() {
    var money = localStorage.getItem('money');
    localStorage.setItem('money', money + 1);
    document.getElementById('money').innerText = localStorage.getItem('money');
});