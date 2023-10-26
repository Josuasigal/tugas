let nilaiLulus = [];
let nilaiTidakLulus = [];

function tambahNilai() {
    let matematika = parseInt(document.getElementById('matematika').value);
    let bahasa = parseInt(document.getElementById('bahasa').value);
    let kimia = parseInt(document.getElementById('kimia').value);

    let rataRata = (matematika + bahasa + kimia) / 3;

    if (rataRata >= 65) {
        nilaiLulus.push(rataRata);
        tambahDetailNilai(rataRata, true);
    } else {
        nilaiTidakLulus.push(rataRata);
        tambahDetailNilai(rataRata, false);
    }

    updateRataRata();
    document.getElementById('matematika').value = '';
    document.getElementById('bahasa').value = '';
    document.getElementById('kimia').value = '';
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
