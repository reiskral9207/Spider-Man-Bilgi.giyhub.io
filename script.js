// Butona tıklandığında metin rengini değiştiren fonksiyon
function changeTextColor() {
    const text = document.querySelector('.spiderman-title'); // H1 başlığını seç
    const currentColor = window.getComputedStyle(text).color; // Mevcut renk

    // Eğer mevcut renk beyaz ise, siyaha döndür
    if (currentColor === 'rgb(255, 255, 255)') {
        text.style.color = 'black';
    } else {
        text.style.color = '#FFF'; // Eğer siyahsa beyaza döndür
    }
}
