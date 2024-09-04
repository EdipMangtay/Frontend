
// Kullanıcı >18 ise sisteme giriş ypaabilsin

const userAge =prompt("Yaşınızı giriniz: ");

if(userAge>=18)
{
    alert("Sisteme giriş yapabilirsiniz.");

}
else{
    alert("Giriş yapamazsın")
    window.location.replace("https://www.google.com");
}