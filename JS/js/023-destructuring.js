// Array tanımı: systemInfo adında bir dizi tanımladık, bu dizi sistem bilgilerini içeriyor.
const systemInfo = ["127.0.0.1", "8000", "development", "admin", "123456", "nginx", "linux"];

// Dizinin 0. indeksindeki değeri console'a yazdırıyoruz, yani "127.0.0.1"
console.log(systemInfo[0]);

// Geleneksel yöntemle dizinin elemanlarını değişkenlere atama
// const ip = systemInfo[0]
// const port = systemInfo[1]
// const dev = systemInfo[2]
// const username = systemInfo[3]
// const password = systemInfo[4]

// Burada 'systemInfo' bir dizidir, bu yüzden array destructuring kullanıyoruz
// İlk 5 elemanını destructuring ile değişkenlere atadık
const [ip, port, dev, username, password, ...restInfo] = systemInfo;

console.log(ip, port, dev, username, password, restInfo);  // "127.0.0.1", "8000", "development", "admin", "123456" ve geri kalan ["nginx", "linux"] yazdırılır

// Object tanımı: user adında bir obje tanımladık
const user = {
  firstName: "Lorem",  // İsim
  lastName: "Ipsum Dolor",  // Soyisim
  age: 29,  // Yaş
  hobbies: ["dans", "kosu", "bisiklet"],  // Hobiler
  info: ["developer", "freelancer", "javascript"]  // Ekstra bilgiler
};

// 'user' bir objedir, bu yüzden object destructuring kullanıyoruz
// const {firstName, lastName, age} = user;  // Obje özelliklerini değişkenlere atama
// -------------------------age: renamedKey
// Yaş özelliğini farklı bir isimle atamak istiyoruz, bu yüzden age: userAge kullanıyoruz
// const {firstName, lastName, age:userAge} = user;

// Obje destructuring ile belirli özellikleri değişkenlere atama ve geri kalan bilgileri 'rest' adlı objeye toplama
// const {firstName, lastName, age:userAge, ...rest} = user;

console.log(firstName, lastName, userAge, rest);  // İsim, soyisim, yaş ve geri kalan özellikleri yazdırıyoruz

// Obje 'user'ı tablo formatında yazdırmak için console.table() kullanıyoruz
console.table(user);

// Fonksiyon: objeyi parametre olarak alıp, objenin içindeki verilere ulaşma (Destructuring kullanılmıyor)
const hello = (obj) => {
  console.log(obj.firstName, obj.lastName, obj.age);  // Obje içindeki özelliklere 'dot notation' ile erişiliyor
};

// Fonksiyon: Destructuring kullanılarak parametre olarak direkt objenin özelliklerini alıyoruz
const helloV2 = ( {firstName, lastName, age} ) => {
  console.log(firstName, lastName, age);  // Objeden gelen verilerle fonksiyon çalıştırılıyor
};

// Fonksiyon: Parametre olarak objeyi alıp, fonksiyonun içinde destructuring kullanarak özellikleri alıyoruz
const helloV3 = ( obj ) => {
  const {firstName, lastName, age } = obj;  // Fonksiyon içinde destructuring
  console.log(firstName, lastName, age);  // Değişkenleri kullanarak yazdırma
};

// helloV2 ve helloV3 fonksiyonlarını çağırıyoruz ve user objesini parametre olarak geçiriyoruz
helloV2(user);  // "Lorem", "Ipsum Dolor", 29 yazdırır
helloV3(user);  // "Lorem", "Ipsum Dolor", 29 yazdırır