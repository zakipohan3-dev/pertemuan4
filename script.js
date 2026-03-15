// SCRIPT JS UNTUK WEBSITE UMSU - MODUL PRAKTIKUM WEB PROGRAMMING

// 1. FUNGSI SMOOTH SCROLL UNTUK NAVIGASI
var tautanNavigasi = document.querySelectorAll('.menu ul li a');
for (var i = 0; i < tautanNavigasi.length; i++) {
    tautanNavigasi[i].addEventListener('click', function(event) {
        event.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
        });
    });
}

// 2. EFEK PERUBAHAN WARNA HEADER SAAT SCROLL
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 30) {
        header.style.backgroundColor = '#004c66';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    } else {
        header.style.backgroundColor = '#006699';
        header.style.boxShadow = 'none';
    }
});

// 3. EFEK HOVER PADA BOX FAKULTAS
var boxFakultas = document.querySelectorAll('.box-fakultas .box');
for (var j = 0; j < boxFakultas.length; j++) {
    boxFakultas[j].addEventListener('mouseover', function() {
        this.style.backgroundColor = '#e6f7ff';
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'all 0.3s';
    });
    boxFakultas[j].addEventListener('mouseout', function() {
        this.style.backgroundColor = 'white';
        this.style.transform = 'translateY(0)';
    });
}

// 4. NOTIFIKASI SAAT HALAMAN SELESAI DIMUAT
window.onload = function() {
    console.log('Website UMSU berhasil dimuat!');
};