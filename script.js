document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("kontakForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nama = document.getElementById("nama").value.trim();
      const email = document.getElementById("email").value.trim();
      const pesan = document.getElementById("pesan").value.trim();
      if (!nama || !email || !pesan) {
        alert("Semua kolom harus diisi!");
        return;
      }
      if (!email.includes("@")) {
        alert("Email tidak valid.");
        return;
      }
      alert("Pesan berhasil dikirim (simulasi).");
      form.reset();
    });
  }

  const tbody = document.getElementById("jadwal-shalat");
  if (tbody) {
    fetch("https://api.aladhan.com/v1/timingsByCity?city=Jakarta&country=Indonesia&method=2")
      .then(response => response.json())
      .then(data => {
        const jadwal = data.data.timings;
        tbody.innerHTML = `
          <tr><td>Subuh</td><td>${jadwal.Fajr}</td></tr>
          <tr><td>Dzuhur</td><td>${jadwal.Dhuhr}</td></tr>
          <tr><td>Ashar</td><td>${jadwal.Asr}</td></tr>
          <tr><td>Maghrib</td><td>${jadwal.Maghrib}</td></tr>
          <tr><td>Isya</td><td>${jadwal.Isha}</td></tr>
        `;
      });
  }
});