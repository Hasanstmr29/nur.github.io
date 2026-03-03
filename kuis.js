const soal = [
    {
        tanya: "Makanan yang menjadi sumber energi utama adalah?",
        pilihan: ["Protein", "Karbohidrat", "Vitamin", "Lemak"],
        jawaban: 1
    },
    {
        tanya: "Zat gizi utama pada telur adalah?",
        pilihan: ["Vitamin C", "Karbohidrat", "Protein", "Serat"],
        jawaban: 2
    },
    {
        tanya: "Buah yang kaya vitamin C adalah?",
        pilihan: ["Apel", "Jeruk", "Pisang", "Alpukat"],
        jawaban: 1
    },
    {
        tanya: "Susu bermanfaat untuk?",
        pilihan: ["Mata", "Otak", "Tulang", "Kulit"],
        jawaban: 2
    },
    {
        tanya: "Contoh makanan berprotein adalah?",
        pilihan: ["Nasi", "Jagung", "Ayam", "Kentang"],
        jawaban: 2
    },
    {
        tanya: "Sayuran hijau yang kaya zat besi?",
        pilihan: ["Bayam", "Wortel", "Jagung", "Kentang"],
        jawaban: 0
    },
    {
        tanya: "Lemak sehat banyak terdapat pada?",
        pilihan: ["Alpukat", "Permen", "Nasi", "Roti"],
        jawaban: 0
    },
    {
        tanya: "Karbohidrat berfungsi untuk?",
        pilihan: ["Pertumbuhan", "Energi", "Imun", "Pencernaan"],
        jawaban: 1
    },
    {
        tanya: "Vitamin membantu tubuh untuk?",
        pilihan: ["Berat badan", "Kesehatan", "Energi utama", "Otot"],
        jawaban: 1
    },
    {
        tanya: "Makan bergizi sebaiknya?",
        pilihan: ["Berlebihan", "Seimbang", "Sedikit", "Jarang"],
        jawaban: 1
    }
];

let index = 0;
let skor = 0;

const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

function tampilSoal(){
    const s = soal[index];
    quiz.innerHTML = `
        <div class="question">${index+1}. ${s.tanya}</div>
        ${s.pilihan.map((p,i)=>`
            <div class="option" onclick="cekJawaban(${i})">${p}</div>
        `).join("")}
    `;
}

function cekJawaban(pilih){
    if(pilih === soal[index].jawaban){
        skor++;
    }
    nextQuestion();
}

function nextQuestion(){
    index++;
    if(index < soal.length){
        tampilSoal();
    }else{
        quiz.innerHTML = "";
        result.innerHTML = `
            🎉 Kuis Selesai! <br>
            Skor kamu: <b>${skor} / ${soal.length}</b>
        `;
    }
}

tampilSoal();
