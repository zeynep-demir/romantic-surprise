// Gül yaprakları oluşturma
function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');

    // Rastgele yatay pozisyon
    leaf.style.left = Math.random() * 100 + 'vw';

    // Farklı hızlar ve döngüler için rastgele süre
    leaf.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5 saniye

    // Gül yapraklarını ekleme
    document.getElementById('falling-leaves').appendChild(leaf);

    // Animasyon bittikten sonra yaprağı kaldır
    setTimeout(() => {
        leaf.remove();
    }, 5000); // 5 saniye
}

// Sürekli olarak gül yaprakları oluşturma
setInterval(createLeaf, 300); // Her 300 milisaniyede bir yaprak oluştur
