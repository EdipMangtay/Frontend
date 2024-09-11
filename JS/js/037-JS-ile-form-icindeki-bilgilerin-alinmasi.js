// 'registerFormElement' adında bir değişken oluşturuluyor ve bu değişken, HTML belgesinde 'registerForm' ID'sine sahip formu işaret ediyor
const registerFormElement = document.querySelector('#registerForm');

// Formun 'submit' (gönderme) olayına bir dinleyici ekleniyor
registerFormElement.addEventListener("submit", (event) => {
  // Formun varsayılan davranışı (sayfanın yenilenmesi) engelleniyor
  event.preventDefault();
  
  // Olayın kendisi (event) konsola yazdırılıyor
  console.log(event);

  // Formda bulunan tüm input elemanlarının değerlerini saklamak için bir nesne oluşturuluyor
  const formValues = {};

  // Form elemanlarını Array'e dönüştürüp, her bir eleman üzerinde döngü kuruyoruz
  Array.from(event.target.elements).forEach(item => {
    
    // Eğer form elemanı bir input ise, işlemlere devam ediyoruz
    if (item.tagName === "INPUT") {
      // Eğer input tipi text, email veya password ise, formValues nesnesine name ve value değerlerini atıyoruz
      if (
        item.type === "text" || 
        item.type === "email" || 
        item.type === "password"
      ) {
        formValues[item.name] = item.value;
      }

      // Eğer input tipi checkbox ise, formValues nesnesine name ve checked durumunu (true/false) atıyoruz
      if (item.type === "checkbox") {
        formValues[item.name] = item.checked;
      }
    }
  });

  // Toplanan form verileri tablo formatında konsola yazdırılıyor
  console.table(formValues);
  
  // Form sıfırlanarak içindeki tüm veriler temizleniyor
  registerFormElement.reset();
});