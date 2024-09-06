// registerForm adında bir değişken oluşturuluyor ve bu değişken, HTML belgesinde 'registerForm' ID'sine sahip formu işaret ediyor
const registerForm = document.querySelector('#registerForm');

// Seçilen formun doğru bir şekilde tanımlanıp tanımlanmadığını görmek için formu konsola yazdırıyoruz
console.log(registerForm);  

// 'reset' olayı formda tetiklendiğinde (yani form sıfırlandığında), bir fonksiyon çalışıyor ve 'Form resetlendi' mesajı konsola yazdırılıyor
registerForm.addEventListener('reset', () => {
    console.log('Form resetlendi');
});

// 'submit' olayı formda tetiklendiğinde (yani kullanıcı formu gönderdiğinde), bir fonksiyon çalışıyor.
// 'event.preventDefault()' fonksiyonu, varsayılan form gönderme davranışını engelliyor (sayfanın yeniden yüklenmesi engelleniyor)
// Daha sonra 'Form gönderildi' mesajı konsola yazdırılıyor
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form gönderildi');
});