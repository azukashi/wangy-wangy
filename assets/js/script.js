// Fungsi buat Dark Mode & Light Mode
const setLightMode = () => {
  const dark = document.querySelector(".dark-mode");
  const light = document.querySelector(".light-mode");
  const body = document.querySelector("body");
  const theme_color = document.querySelector("#theme-color");
  dark.classList.toggle("d-none");
  light.classList.toggle("d-none");
  body.classList.remove("dark");
  theme_color.setAttribute("content", "#FFFFFF");
  localStorage.removeItem("theme");
};
const setDarkMode = () => {
  const dark = document.querySelector(".dark-mode");
  const light = document.querySelector(".light-mode");
  const body = document.querySelector("body");
  const theme_color = document.querySelector("#theme-color");
  light.classList.toggle("d-none");
  dark.classList.toggle("d-none");
  body.classList.add("dark");
  theme_color.setAttribute("content", "#1A202C");
  localStorage.setItem("theme", "dark");
};
if (localStorage.getItem("theme") == "dark") {
  setDarkMode();
}

// Fungsi buat ngisi hasil template
const wangy1 = (nama) => {
  var nama = document.getElementById("nama").value;
  const namaKecil = nama.toLowerCase();
  const namaBesar = nama.toUpperCase();
  const lc = namaBesar.charAt(nama.length - 1).repeat(10);
  let template1;
  template1 = `${namaBesar} ......... ${namaBesar} ${namaBesar}${lc} AAAAAAAAAAAAAAAAAAAAAAAGH ❤ ❤ ❤ ❤ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya ${namaKecil} wangi aku mau nyiumin aroma wanginya ${namaKecil} AAAAAAAH ~~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~~~~ AAAAAH ${namaBesar} keluar pertama kali juga manis ❤ ❤ ❤ dia pas ngedesah juga manis banget AAAAAAAAH ${namaBesar} LUCCUUUUUUUUUUUUUUU............ GUA BAKAL BAKAR DUIT 12 JUTA RUPIAH BUAT ${namaBesar} AAAAAAAAAAAAAAAAAAAAAAAAAAAAGH ❤ ❤ ❤ \napa ? ${namaBesar} itu gak nyata ? Cuma karakter 2 dimensi katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ${namaKecil} ngeliat gw ... ${namaBesar} di laptop ngeliatin gw. ❤ ❤ ❤  ${namaKecil} ... kamu percaya sama aku ? aaaaaaaaaaah syukur ${namaKecil} gak malu merelakan aku aaaaaah ❤ ❤ ❤ YEAAAAAAAAAAAH GUA MASIH PUNYA ${namaBesar} HU HA HU HI HU HA HU HI AKU SAYANG AKU CINTA ${namaBesar} AKU SUAMII ${namaBesar}`;
  document.getElementById("isi").value = template1;
  document.getElementById("isi").select();
  document.execCommand("copy");
};
const wangy2 = (nama) => {
  var nama = document.getElementById("nama").value;
  const namaBesar = nama.toUpperCase();
  const lc = namaBesar.charAt(nama.length - 1).repeat(10);
  let template2;
  template2 = `Halo teman2ku semuanya,
  
Jika andai kata saya bisa meminta doa dari kalian semua, tolong doain ya bang malem ini saya bisa bermimpi pala saya dijepit ama PAHANYA ${namaBesar} YANG BONTOT BANGET GILA MEN GATAHAN GUE LIAT PAHA SEGEDE GITU GIMANA KALO KEDUA TANGAN GUE INI COBA UNTUK NGEREMESNYA TRUS KEDUA TELINGA GUE NGERASAIN BETAPA HALUSNYA KULIT PAHA THICC AF YANG ${namaBesar} PUNYA MUNGKIN BISA JADI SEBUAH ANUGERAH UNTUK GUE BISA MIMPIIN DIA MALEM\n\nINI SUMPAH MEN GILA MANTEP BANGET,\nGUA PENGEN BANGET DIJEPIT PAHANYA ${namaBesar}${lc}`;
  document.getElementById("isi").value = template2;
  document.getElementById("isi").select();
  document.execCommand("copy");
};
const wangy3 = (nama) => {
  var nama = document.getElementById("nama").value;
  const namaKecil = nama.toLowerCase();
  const namaKapital = nama.charAt(0).toUpperCase() + nama.slice(1);
  let template3;
  template3 = `Jadi inget kemarin... adek gua namanya ${namaKapital},\n\nGw baru masuk ke kamar ${namaKapital} dia barusan pakai BH njirr mana geede banget tt nya. Dia kan kesusahan pakainya saking kecil bh nya Gw diteriakin anjir. Trus katanya "kak tolongin ${namaKapital} ngaitkan kebelakang", mana dia gapakai cd anjir muluus gak ada hutan\n\nYa sebenernya agak ngaatcheng dikit meski adek sendiri kalo namanya liat tt ya gitu lah apalagi gede. Wangy gitu\n\nGak lama malemnya gw begadang dikamarnya sampe jam 2 pagi main PS4. Terakhir mati lampu akhirnya gabisa tidur karna panasnya sampai gw buka baju deh terpaksa. Gw suruh buka bajunya ${namaKapital} aja biar gak panas. Ntar kakak kipasin kayak sate ya ${namaKecil}, hihi.\n\n"Iyadeh kak". Kata ${namaKapital}\n\nPas ${namaKapital} buka baju ternyata dari tadi sore gapakai bh, baru kali ini gw liat tt adek gua secara langsung tanpa pakai bh\n\nGw langsung buang muka. Gw bilang "${namaKapital} kamu kenapa gapakai bh?"\n\nKata ${namaKapital}, "Iya kak ini bh udah kekecilan, cuman aku pakai buat keluar rumah aja".\n\n"Udah ya kak jangan malu malu kak. Sama adek sendiri aja gitu haahaha". Gw pas liat langsung. Deg deg ser njirr. Akhirnya gw pura pura gak sengaja pegang\n\npenntilnya astaga udah keras ternyata.. Fikir gw masa adek gw sngee\n\n${namaKapital} bilang. "Kak jangan pegang itunyaa gelii 😭"`;
  document.getElementById("isi").value = template3;
  document.getElementById("isi").select();
  document.execCommand("copy");
};

// Event Listener. Ketika button di-klik, do smthing.
$("#btn-nama").click(function () {
  if (document.getElementById("nama").value == "") {
    return;
  } else {
    wangy1(nama);
  }
});
$("#temp-1").click(() => {
  if (document.getElementById("nama").value == "") {
    return;
  } else {
    wangy1(nama);
  }
});
$("#temp-2").click(() => {
  if (document.getElementById("nama").value == "") {
    return;
  } else {
    wangy2(nama);
  }
});
$("#temp-3").click(() => {
  const warning = confirm(
    "WARNING!\n\nTemplate ini berisi kata kata yang sensitif dan untuk usia dewasa!\n\nKamu yakin mau liat hasilnya?"
  );
  if (warning == false) {
    document.getElementById("nama").value = "";
    document.getElementById("isi").value = "";
    return;
  }
  if (warning == true) {
    if (document.getElementById("nama").value == "") {
      return;
    } else {
      wangy3(nama);
    }
  }
});
$("#btn-copy").click(() => {
  const temp = $("<input>");
  $("body").append(temp);
  temp.val($("#isi").val());
  temp.select();
  document.execCommand("copy");
  temp.remove();
  alert("Copied!");
});
$("#btn-remove-hasil").click(() => {
  document.getElementById("isi").value = "";
});

// Fungsi yang dijalankan ketika button dark / light mode ditekan
$(".dark-mode").click(() => {
  setDarkMode();
});
$(".light-mode").click(() => {
  setLightMode();
});
