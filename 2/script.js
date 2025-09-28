const data = {
  "Jawa Timur": {
    "Pasuruan": {
      "Kraton": "67161",
      "Prigen": "67157"
    },
    "Surabaya": {
      "Ngagel": "60246",
      "Jagir": "60244"
    }
  },
  "Jawa Barat": {
    "Bandung": {
      "Cinambo": "40294",
      "Mandala Jati": "40195"
    }
  }
};

const provSelect = document.getElementById("provinsi");
const kotaSelect = document.getElementById("kot");
const kecSelect  = document.getElementById("kec");
const hasilBox   = document.getElementById("output");


for (let provinsi in data) {
  let option = new Option(provinsi, provinsi);
  provSelect.add(option);
}

// saat provinsi diganti
provSelect.addEventListener("change", () => {
  kotaSelect.innerHTML = "<option value=''>--Pilih Kota--</option>";
  kecSelect.innerHTML  = "<option value=''>--Pilih Kecamatan--</option>";

  if (provSelect.value === "") return;

  for (let kota in data[provSelect.value]) {
    let option = new Option(kota, kota);
    kotaSelect.add(option);
  }
});

// saat kota diganti
kotaSelect.addEventListener("change", () => {
  kecSelect.innerHTML = "<option value=''>--Pilih Kecamatan--</option>";

  if (kotaSelect.value === "") return;

  for (let kecamatan in data[provSelect.value][kotaSelect.value]) {
    let option = new Option(kecamatan, kecamatan);
    kecSelect.add(option);
  }
});

document.getElementById("form-kodepos").addEventListener("submit", (event) => {
  event.preventDefault();

  let provinsi = provSelect.value;
  let kot = kotaSelect.value;
  let kec  = kecSelect.value;

  if (!provinsi || !kot || !kec) {
    hasilBox.innerHTML = "<p style='color:red;'>Lengkapi pilihan dulu!</p>";
    return;
  }

  let kodePos = data[provinsi][kot][kec];
  hasilBox.innerHTML = `
    <h3>Hasil Pencarian</h3>
    <p><b>Kode Pos:</b> ${kodePos}</p>
    <p>Kec. ${kec}, Kota ${kot}, Prov. ${provinsi}</p>
  `;
});
