let nilaiLulus = [];
let nilaiTidakLulus = [];

function tambahNilai() {
    let kode = parseInt(document.getElementById('kode').value);
    let waktu = parseInt(document.getElementById('waktu').value);
    let pengguna = parseInt(document.getElementById('pengguna').value);

    let rataRata = (kode +waktu + pengguna) / 3;

    if (rataRata >= 65) {
        nilaiLulus.push(rataRata);
        tambahDetailNilai(rataRata, true);
    } else {
        nilaiTidakLulus.push(rataRata);
        tambahDetailNilai(rataRata, false);
    }

    updateRataRata();
    document.getElementById('kode').value = '';
    document.getElementById('waktu').value = '';
    document.getElementById('pengguna').value = '';
}

function tambahDetailNilai(rataRata, lulus) {
    let detailNilai = document.getElementById('detailNilai');
    let li = document.createElement('li');
    li.textContent = `Rata-rata ${rataRata.toFixed(2)} (${lulus ? 'Lulus' : 'Tidak Lulus'})`;
    detailNilai.appendChild(li);
}

function updateRataRata() {
    let rataRataLulus = 0;
    let rataRataTidakLulus = 0;

    if (nilaiLulus.length > 0) {
        rataRataLulus = (nilaiLulus.reduce((a, b) => a + b) / nilaiLulus.length).toFixed(2);
    }

    if (nilaiTidakLulus.length > 0) {
        rataRataTidakLulus = (nilaiTidakLulus.reduce((a, b) => a + b) / nilaiTidakLulus.length).toFixed(2);
    }

    document.getElementById('rataRataLulus').textContent = `${rataRataLulus}%`;
    document.getElementById('rataRataTidakLulus').textContent = `${rataRataTidakLulus}%`;
}
