// Fungsi untuk menampilkan surat dengan pilihan "Ya" atau "Tidak"
function showMessage() {
    document.getElementById("letter").style.display = "block";
    document.getElementById("letter").classList.add("show-letter");
    document.getElementById("blur").style.display = "block"; // Tampilkan blur background
}

// Fungsi ketika memilih "Ya"
function showLoveMessage() {
    document.getElementById("letter").innerHTML = `<div class='letter-content'>
        <p>Semoga kita bisa menjadi lebih dekat dan lebih baik. Semoga hubungan kita akan lama, dan kita dapat terus saling mendukung dalam setiap langkah yang kita ambil. Aku berharap perjalanan kita bersama ini bisa menjadi cerita yang indah dan penuh kenangan yang tak terlupakan. Dengan setiap tawa, setiap pembicaraan, dan setiap perasaan yang kita bagi, aku merasa lebih yakin bahwa kita bisa menghadapinya bersama.</p>
        <p>Jangan pernah ragu, Ayiff. Kita akan melewati semua tantangan, baik besar maupun kecil, dengan cinta yang tulus dan kesabaran yang tak terbatas. Aku percaya dengan setiap waktu yang kita habiskan bersama, kita akan tumbuh lebih kuat. Semoga hubungan ini bukan hanya tentang kebahagiaan saat ini, tetapi juga tentang komitmen dan perjuangan untuk masa depan yang lebih baik. Aku tak sabar untuk melihat apa yang akan datang, bersama kamu. Semoga kita terus menjadi pribadi yang lebih baik dan tidak pernah berhenti menghargai satu sama lain.</p>
        <p>WA aku segera dan katakan 'Aku mau'.</p>
        <div class="buttons">
            <a href="https://wa.me/085150688441?text=Ayiff,%20aku%20mau" class="yes">Kirim WA</a>
        </div>
    </div>`;
}

// Fungsi untuk mengacak posisi tombol "Tidak"
function moveButton() {
    const button = document.querySelector('.no');
    button.style.position = 'absolute';
    button.style.top = Math.random() * 80 + '%';
    button.style.left = Math.random() * 80 + '%';
}
