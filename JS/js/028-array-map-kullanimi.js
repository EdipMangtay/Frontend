// Bir dizi sayımız var: [1, 2, 3, 4, 5]
const numbers = [1, 2, 3, 4, 5]

// numbers dizisinin her elemanını 10 ile çarparak bir obje olarak geri döndürmek için map() fonksiyonu kullanıyoruz.
// Örneğin: {n: 10}, {n: 20}, {n: 30}, vb.
const newNumbers = numbers.map(num => {
  // Her bir sayıyı 10 ile çarpıp bir obje döndürmek istiyoruz
  return {n: num * 10}
})

console.log(newNumbers) // [{n: 10}, {n: 20}, {n: 30}, {n: 40}, {n: 50}]

// Bir dizi e-posta adresimiz var.
const users = [
  "hakan@js.com",
  "ayla@gmail.com",
  "utku@hotmail.com",
  "kaan@mdn.com",
  "levent@react.com",
  "hilal@python.com",
  "duru#vanillajs.com",  // Geçersiz e-posta (çünkü @ işareti yok)
]

// Her kullanıcı için adını ve domain'ini almak, ayrıca geçerli bir email olup olmadığını kontrol etmek istiyoruz.
const newUsers = users.map(item => {
  // @ işaretinden sonraki kısmı almak için slice() kullanıyoruz (domain kısmı).
  const domain = item.slice( item.search('@') + 1 )
  
  // @ işaretinden önceki kısmı almak için slice() kullanıyoruz (kullanıcı adı kısmı).
  const name = item.slice(0, item.search('@') )
  
  // E-posta adresi geçerli mi, kontrol ediyoruz (eğer @ varsa geçerli sayıyoruz).
  if (item.search('@') > 0) {
    return ({
      name,  // Kullanıcı adı
      domain,  // Domain kısmı
      length: item.length,  // E-posta adresinin uzunluğu
      isValid: true  // Geçerli olup olmadığını belirtmek için isValid true
    })
  }
  
  // Eğer @ işareti yoksa, geçersiz e-posta olarak kabul ediyoruz.
  return ({
    userName: item,  // E-posta adresinin tamamını userName olarak alıyoruz.
    length: item.length,  // E-posta adresinin uzunluğunu belirtiyoruz.
    isValid: false,  // Geçersiz olduğuna dair işaretliyoruz.
  })
})

console.log("newUsers", newUsers) // newUsers dizisini konsolda görüyoruz.

// Geçerli e-posta adreslerini (isValid: true olanları) filtreliyoruz.
const validUsers = newUsers.filter(item => item.isValid)

console.log("validUsers", validUsers)  // Geçerli e-posta adreslerini konsolda görüyoruz.

// users dizisinde geçerli e-posta adreslerini filtreliyoruz ve her kullanıcı için ad, domain, uzunluk ve geçerli olup olmadığını döndürüyoruz.
const filteredValidUsers = users.filter(item => item.search('@') > 0 ? true : false ).map(item => {
  const domain = item.slice( item.search('@') + 1 )  // Domain kısmını alıyoruz.
  const name = item.slice(0, item.search('@') )  // Ad kısmını alıyoruz.
  return ({
    name,  // Kullanıcı adı
    domain,  // Domain kısmı
    length: item.length,  // E-posta adresinin uzunluğu
    isValid: true  // Geçerli olduğunu belirtiyoruz.
  })
})

console.log("filteredValidUsers", filteredValidUsers) // Filtrelenmiş geçerli kullanıcıları konsolda gösteriyoruz.

// 100 adet <li> öğesi nasıl oluşturulur (React ile listeler oluştururken yararlı olabilir).
// Array(100) ifadesi, içinde 100 adet boş eleman bulunan bir dizi oluşturur.
// Bu boş diziyi map() ile işleyerek her bir öğe için `<li>Item X</li>` yapısını oluşturuyoruz.
const newLiItems = [...Array(100)].map((emptyItem, index) => `<li>Item ${index + 1}</li>`)

// 100 adet li elemanını konsolda görüyoruz
console.log(newLiItems)