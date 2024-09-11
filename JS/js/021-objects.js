// Obje Oluşturma (Literal Yöntemi)
const person = {
    firstName: "Tugra",  // Anahtar: firstName, Değer: Tugra
    lastName: "JavaScript",  // Anahtar: lastName, Değer: JavaScript
    "last login": "2023/01/01",  // Anahtar: "last login" (boşluk içeriyor), Değer: Tarih
    "register-date": "2022/01/01",  // Anahtar: "register-date" (tire içeriyor), Değer: Tarih
    fullName: function () { // Obje içinde normal bir fonksiyon (method)
      return `${this.firstName} ${this.lastName}`  // `this` ile objeye ait verilere erişim
    },
    fullNameV2: () => {  // Arrow fonksiyonu kullanımı (dikkat: arrow fonksiyonu `this` kullanmaz)
      return `${this.firstName} ${this.lastName}`  // Bu arrow fonksiyonu, `this` bağlamını referans almaz
    }
}
  
// Obje içerisindeki bilgilere erişim
console.log(person.firstName)  // Dot Notation ile erişim, "Tugra" yazdırır
console.log(person["lastName"])  // Bracket Notation ile erişim, "JavaScript" yazdırır
console.log(person["last login"])  // Boşluk içeren bir anahtara bracket notation ile erişim, "2023/01/01" yazdırır
console.log(person["register-date"])  // Tire (-) içeren bir anahtara bracket notation ile erişim, "2022/01/01" yazdırır
  
// Obje içerisine yeni bilgi ekleme
person.age = 22;  // Yeni bir anahtar (age) ekleniyor ve değeri 22 olarak atanıyor
person["last-time-changed-password"] = "2023/01/01";  // Yeni anahtar (last-time-changed-password) ekleniyor, tarih değeri atanıyor
  
// Obje içindeki bilgiyi güncelleme
person.firstName = "Moca";  // Mevcut firstName değeri "Moca" olarak güncelleniyor
person['lastName'] = "ES6+";  // lastName değeri "ES6+" olarak güncelleniyor
  
console.log(person);  // Güncellenmiş obje yazdırılıyor
  
// Metod (function) kullanımı
console.log(person.fullName());  // person objesinin fullName() fonksiyonu çağrılıyor, "Moca ES6+" döner
console.log(person.fullNameV2());  // Arrow fonksiyon fullNameV2 çağrılıyor, ancak yanlış `this` bağlamı yüzünden "undefined undefined" döner
  
// Objedeki anahtarlar (key) ve değerler (value)
console.log(Object.keys(person));  // Objede bulunan tüm anahtarları (key) dizi olarak döner
console.log(Object.values(person));  // Objede bulunan tüm değerleri (value) dizi olarak döner
console.log(Object.entries(person));  // Hem anahtar hem değerleri ikili dizi (array of arrays) şeklinde döner
  
// Başka bir obje tanımlama (Literal Yöntemi)
const product = {
    isInStock: false,  // Ürünün stokta olup olmadığı bilgisi
    price: 0,  // Ürünün fiyatı
    tax: 1.18,  // Ürüne uygulanan vergi oranı
    priceWithTax: function () {  // Vergili fiyatı hesaplayan bir method
      return this.price * this.tax;  // `this`, price ve tax özelliklerine erişir
    }
}
  
// product objesinden yeni bir obje oluşturma
const iPad = Object.create(product);  // `iPad` objesi `product` objesinden türetiliyor
iPad.name = "iPad Pro";  // iPad objesine yeni bir özellik (name) ekleniyor
iPad.price = 100;  // iPad'in fiyatı güncelleniyor
iPad.isInStock = true;  // iPad'in stok durumu güncelleniyor
  
console.log(iPad);  // iPad objesi yazdırılıyor, tüm özellikleri ve miras alınan özellikler gösteriliyor
console.log(iPad.priceWithTax());  // iPad objesinin priceWithTax() methodu çağrılıyor, vergili fiyat döner