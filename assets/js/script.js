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

const wangy4 = (nama) => {
  var nama = document.getElementById("nama").value;
  const namaKapital = nama.charAt(0).toUpperCase() + nama.slice(1);
  let template4;
  template4 = `Bro, gue gemeteran. GUE GEMETERAN ANJING Gue gak pernah mau berkembangbiak dengan siapapun lebih daripada seorang ${namaKapital}. Badannya yang cakep, TETE GEDE, pinggul seksi dari seorang BIDADARI. Jujur aja, sakit hati kalau tau KENYATAANNYA gue GAK AKAN PERNAH BISA BUAT KAWIN SAMA DIA, ngewarisin gen gue lewat dia, dan ngebiarin dia ngelahirin anak yang sempurna dari gue. Gue rela ngelakuin APAPUN demi kesempatan buat bikin ${namaKapital} hamil. A P A P U N. Dan gue bener-bener gk bisa terima kenyataan. Kenapa Authornya rela bikin suatu hal yang sempurna kyk dia? Buat ngegoda kita? NGETAWAIN KITA DI DEPAN MUKA? SUMPAH BRO, GUE UDAH BENER BENER GAK TAHAN. ANJING.`;
  document.getElementById("isi").value = template4;
  document.getElementById("isi").select();
  document.execCommand("copy");
};

const wangy5 = (nama) => {
  var nama = document.getElementById("nama").value;
  const namaKapital = nama.charAt(0).toUpperCase() + nama.slice(1);
  let template5;
  template5 = `Buruan, panggil gue SIMP, ato BAPERAN. ini MURNI PERASAAN GUE. Gue pengen genjot bareng ${namaKapital}. Ini seriusan, suaranya yang imut, mukanya yang cantik, apalagi badannya yang aduhai ningkatin gairah gue buat genjot ${namaKapital}. Setiap lapisan kulitnya pengen gue jilat. Saat gue mau crot, gue bakal moncrot sepenuh hati, bisa di perut, muka, badan, teteknya, sampai lubang burit pun bakal gue crot sampai puncak klimaks. Gue bakal meluk dia abis gue moncrot, lalu nanya gimana kabarnya, ngrasain enggas bareng saat telanjang. Dia bakal bilang kalau genjotan gue mantep dan nyatain perasaannya ke gue, bilang kalo dia cinta ama gue. Gue bakal bilang balik seberapa gue cinta ama dia, dan dia bakal kecup gue di pipi. Terus kita ganti pakaian dan ngabisin waktu nonton film, sambil pelukan ama makan hidangan favorit. Gue mau ${namaKapital} jadi pacar, pasangan, istri, dan idup gue. Gue cinta dia dan ingin dia jadi bagian tubuh gue. Lo kira ini copypasta? Kagak cok. Gue ngetik tiap kata nyatain prasaan gue. Setiap kali elo nanya dia siapa, denger ini baik-baik : DIA ISTRI GUE. Gue sayang ${namaKapital}, dan INI MURNI PIKIRAN DAN PERASAAN GUE.`;
  document.getElementById("isi").value = template5;
  document.getElementById("isi").select();
  document.execCommand("copy");
};

const wangy6 = (nama) => {
  var nama = document.getElementById("nama").value;
  const namaKapital = nama.charAt(0).toUpperCase() + nama.slice(1);
  let template6;
  template6 = `I would literally never stop trying to impregnate ${namaKapital}. Every day I would wake her up by coming in her and every night I would cum in her right before going to sleep, which I would do with my dick stuck insider her. I would take some viagra before bed just to maintain my erection so that she'll be ready in the morning when I thrust into her like an animal and slather her in kisses. Part of our wedding vows would be to have as many children as physically possible. I wouldn't even care if she's already pregnant, I'll fuck her while she's pregnant and she'll get double pregnant. I'll fill her with so much cum every day that she'll look pregnant even when she isn't (which she'll never be after we're married) I would do everything in my power to make ${namaKapital} as fertile as possible. I'd give her fertility drugs, I'd give her uterus massages, breast massages, I wouldn't let her go 12 hours without at least one spastic orgasm. I'll even bake her home made lactation inducing biscuits to help her get to a point of hyperlactation syndrome so that she'll be seeping out multiple quarts of milk per day. Which I will save and drink just so that I can tell her how delicious it is. I'll make her so fertile that triplets will be the minimum number she's carrying at any given time. I would literally never stop doting on her, I would respond to her every beck and call and I would cum inside her again each time she asks for something. She would be so pregnant all the time that she would literally not be able to stand up straight anymore even after menopause. Her spine would be permanently bent out of shape to accommodate a pregnant belly. Even after she can't get pregnant anymore I would just keep putting more eggs into her. I would clone her purely so that I can put fresh eggs from the clone inside her after she runs out of them. She would have so much progesterone running through her veins at any given time that even the thought of not being pregnant would seem alien to her.`;
  document.getElementById("isi").value = template6;
  document.getElementById("isi").select();
  document.execCommand("copy");
};

const wangy7 = (nama) => {
  var nama = document.getElementById("nama").value;
  const namaBesar = nama.toUpperCase();
  let template7;
  template7 = `NENEN NENEN KEPENGEN NENEN SAMA ${namaBesar}. TETEK GEDE NAN KENCANG MILIK ${namaBesar} MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. ${namaBesar}, PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET, BIARKAN MULUT KERINGKU BISA MENGECAP NENEN ${namaBesar}. BIARKAN AKU MENGENYOT NENENMU ${namaBesar}. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YANG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN. NENEN NENEEEEN NENEN ${namaBesar} WANGIIII`;
  document.getElementById("isi").value = template7;
  document.getElementById("isi").select();
  document.execCommand("copy");
};

const wangy8 = (nama) => {
  var nama = document.getElementById("nama").value;
  const namaKapital = nama.charAt(0).toUpperCase() + nama.slice(1);
  let template8;
  template8 = `Sejujurnya gw ga nyangka ama tindakan lo yg ga dewasa begini. Kita udh temenan dri kecil, melalui berbagai kenangan, tapi sikap lo begini ke gw, ga habis pikir. Padahal sudah berjanji tidak mengusik hubungan satu sama lain lagi, tapi maksud tindakan mu sekarang ini apa? Tiba tiba di pagi bangun tidur lu make PP ${namaKapital}. Lu kira lucu begitu anjing? Make waifu pp orang seenaknya? Ngeklaim pula bangsad maksudnya apa apaan coba... Pertemanan dari kecil kita ga dihargai sama sekali. :) Gw tunggu klarifikasi lo`;
  document.getElementById("isi").value = template8;
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

$("#temp-4").click(() => {
  const warning = confirm(
    "WARNING!\n\nTemplate ini berisi kata kata yang sensitif!\n\nKamu yakin mau liat hasilnya?"
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
      wangy4(nama);
    }
  }
});

$("#temp-5").click(() => {
  if (document.getElementById("nama").value == "") {
    return;
  } else {
    wangy5(nama);
  }
});

$("#temp-5").click(() => {
  if (document.getElementById("nama").value == "") {
    return;
  } else {
    wangy5(nama);
  }
});

$("#temp-6").click(() => {
  if (document.getElementById("nama").value == "") {
    return;
  } else {
    wangy6(nama);
  }
});

$("#temp-7").click(() => {
  if (document.getElementById("nama").value == "") {
    return;
  } else {
    wangy7(nama);
  }
});

$("#temp-8").click(() => {
  if (document.getElementById("nama").value == "") {
    return;
  } else {
    wangy8(nama);
  }
});

// Copy button, Hapus hasil button
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
