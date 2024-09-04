const userID = prompt("TC:  ");
const userAge = prompt("Yaşınızı giriniz: ");
if (userAge >= 18 && userID.length === 11) {  // burada 3 tane = kullandık çünkü hem değer hem de tip kontrolü yapmak istiyoruz.
    alert("Sisteme giriş yapabilirsiniz.");
}
else {
    alert("Giriş yapamazsın")
    window.location.replace("https://www.google.com");
}
