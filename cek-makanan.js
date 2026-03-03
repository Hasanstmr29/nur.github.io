document.addEventListener("DOMContentLoaded", function () {

    const data = {
        nasi: {
            nama: "🍚 Nasi",
            kalori: "175 kkal",
            protein: "4 g",
            karbo: "40 g",
            lemak: "0.4 g",
            vitamin: "Vitamin B",
            manfaat: "Memberi energi untuk belajar dan bermain.",
            img: "img/nasi.jpg"
        },
        telur: {
            nama: "🥚 Telur",
            kalori: "155 kkal",
            protein: "13 g",
            karbo: "1 g",
            lemak: "11 g",
            vitamin: "Vitamin A & D",
            manfaat: "Membantu pertumbuhan dan kecerdasan.",
            img: "img/telur.jpg"
        },
        ayam: {
            nama: "🍗 Ayam",
            kalori: "239 kkal",
            protein: "27 g",
            karbo: "0 g",
            lemak: "14 g",
            vitamin: "Vitamin B6",
            manfaat: "Membuat tubuh dan otot kuat.",
            img: "img/ayam.jpg"
        },
        susu: {
            nama: "🥛 Susu",
            kalori: "103 kkal",
            protein: "8 g",
            karbo: "12 g",
            lemak: "2.4 g",
            vitamin: "Vitamin D",
            manfaat: "Menguatkan tulang dan gigi.",
            img: "img/susu.jpg"
        },
        apel: {
            nama: "🍎 Apel",
            kalori: "52 kkal",
            protein: "0.3 g",
            karbo: "14 g",
            lemak: "0.2 g",
            vitamin: "Vitamin C",
            manfaat: "Menjaga daya tahan tubuh.",
            img: "img/apel.jpg"
            
        },
        ikan: {
    nama: "🐟 Ikan",
    kalori: "206 kkal",
    protein: "22 g",
    karbo: "0 g",
    lemak: "12 g",
    vitamin: "Omega 3",
    manfaat: "Baik untuk otak dan kecerdasan.",
    img: "img/ikan.jpg"
},
tempe: {
    nama: "🍱 Tempe",
    kalori: "193 kkal",
    protein: "20 g",
    karbo: "9 g",
    lemak: "11 g",
    vitamin: "Vitamin B",
    manfaat: "Sumber protein nabati.",
    img: "img/tempe.jpg"
},
tahu: {
    nama: "⬜ Tahu",
    kalori: "76 kkal",
    protein: "8 g",
    karbo: "2 g",
    lemak: "4 g",
    vitamin: "Kalsium",
    manfaat: "Baik untuk tulang.",
    img: "img/tahu.jpg"
},
pisang: {
    nama: "🍌 Pisang",
    kalori: "89 kkal",
    protein: "1.1 g",
    karbo: "23 g",
    lemak: "0.3 g",
    vitamin: "Vitamin B6",
    manfaat: "Menambah energi cepat.",
    img: "img/pisang.jpg"
},
jeruk: {
    nama: "🍊 Jeruk",
    kalori: "47 kkal",
    protein: "0.9 g",
    karbo: "12 g",
    lemak: "0.1 g",
    vitamin: "Vitamin C",
    manfaat: "Meningkatkan daya tahan tubuh.",
    img: "img/jeruk.jpg"
},
wortel: {
    nama: "🥕 Wortel",
    kalori: "41 kkal",
    protein: "0.9 g",
    karbo: "10 g",
    lemak: "0.2 g",
    vitamin: "Vitamin A",
    manfaat: "Baik untuk mata.",
    img: "img/wortel.jpg"
},
bayam: {
    nama: "🥬 Bayam",
    kalori: "23 kkal",
    protein: "2.9 g",
    karbo: "3.6 g",
    lemak: "0.4 g",
    vitamin: "Zat Besi",
    manfaat: "Mencegah anemia.",
    img: "img/bayam.jpg"
},
kentang: {
    nama: "🥔 Kentang",
    kalori: "77 kkal",
    protein: "2 g",
    karbo: "17 g",
    lemak: "0.1 g",
    vitamin: "Vitamin C",
    manfaat: "Sumber energi alternatif.",
    img: "img/kentang.jpg"
},
roti: {
    nama: "🍞 Roti",
    kalori: "265 kkal",
    protein: "9 g",
    karbo: "49 g",
    lemak: "3.2 g",
    vitamin: "Vitamin B",
    manfaat: "Mengenyangkan.",
    img: "img/roti.jpg"
},
keju: {
    nama: "🧀 Keju",
    kalori: "402 kkal",
    protein: "25 g",
    karbo: "1.3 g",
    lemak: "33 g",
    vitamin: "Kalsium",
    manfaat: "Menguatkan tulang.",
    img: "img/keju.jpg"
},
yogurt: {
    nama: "🥣 Yogurt",
    kalori: "59 kkal",
    protein: "10 g",
    karbo: "3.6 g",
    lemak: "0.4 g",
    vitamin: "Probiotik",
    manfaat: "Menyehatkan pencernaan.",
    img: "img/yogurt.jpg"
},
kacang: {
    nama: "🥜 Kacang",
    kalori: "567 kkal",
    protein: "26 g",
    karbo: "16 g",
    lemak: "49 g",
    vitamin: "Vitamin E",
    manfaat: "Sumber energi tinggi.",
    img: "img/kacang.jpg"
},
alpukat: {
    nama: "🥑 Alpukat",
    kalori: "160 kkal",
    protein: "2 g",
    karbo: "9 g",
    lemak: "15 g",
    vitamin: "Vitamin E",
    manfaat: "Lemak sehat untuk jantung.",
    img: "img/alpukat.jpg"
},
jagung: {
    nama: "🌽 Jagung",
    kalori: "86 kkal",
    protein: "3.2 g",
    karbo: "19 g",
    lemak: "1.2 g",
    vitamin: "Vitamin B",
    manfaat: "Sumber energi.",
    img: "img/jagung.jpg"
},
pepaya: {
    nama: "🍈 Pepaya",
    kalori: "43 kkal",
    protein: "0.5 g",
    karbo: "11 g",
    lemak: "0.3 g",
    vitamin: "Vitamin C",
    manfaat: "Melancarkan pencernaan.",
    img: "img/pepaya.jpg"
}

    };

    const select = document.getElementById("makanan");
    const hasil = document.getElementById("hasil");

    select.addEventListener("change", function () {
        const pilih = this.value;

        if (!pilih) {
            hasil.innerHTML = "";
            return;
        }

        const m = data[pilih];

        hasil.innerHTML = `
            <div style="background:#fff;padding:20px;border-radius:12px;
                        box-shadow:0 4px 10px rgba(0,0,0,.1);margin-top:20px;">
                <h3>${m.nama}</h3>
                <img src="${m.img}" style="max-width:200px;border-radius:10px">
                <p><b>Kalori:</b> ${m.kalori}</p>
                <p><b>Protein:</b> ${m.protein}</p>
                <p><b>Karbohidrat:</b> ${m.karbo}</p>
                <p><b>Lemak:</b> ${m.lemak}</p>
                <p><b>Vitamin:</b> ${m.vitamin}</p>
                <hr>
                <p><b>Manfaat:</b> ${m.manfaat}</p>
            </div>
        `;
    });

});