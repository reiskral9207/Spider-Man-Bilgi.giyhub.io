// Buton tıklama olayını dinle
document.getElementById('color-change-btn').addEventListener('click', function() {
    // Metnin rengini değiştir
    const text = document.getElementById('spiderman-text');
    text.style.color = text.style.color === 'red' ? 'white' : 'red'; // Eğer renk kırmızıysa beyaza döner
});
