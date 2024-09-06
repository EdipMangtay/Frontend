// reduce fonksiyonu ile toplama işlemi.
// arr.reduce((onceki, simdiki) => {yapilacak islem}, ilkDeger )

const items = [1, 2, 3, 4, 5]

// items dizisindeki tüm sayıları toplamak için reduce() kullanıyoruz.
// accumulator: biriktirici, her adımda toplama işlemini biriktirir.
// current: dizideki o anki eleman.
// 0: baştaki toplam değeri (ilk değer).
const sum = items.reduce((accumulator, current) => accumulator + current, 0)

console.log(sum)  // 1 + 2 + 3 + 4 + 5 = 15


// Farklı bir reduce() kullanımı ile en yüksek fiyatı bulma.
const prices = [100, 200, 10, 40, 500, 90]

// Bu fonksiyon her iki elemanı karşılaştırarak en büyük değeri döndürür.
// Math.max() fonksiyonu iki sayının büyük olanını döndürür.
const maxPrice = prices.reduce((acc, current) => Math.max(acc, current))

console.log(maxPrice)  // 500


// itemPrices dizisinde her bir item'in fiyatını toplayacağız.
const itemPrices = [
  {name: "Laptop", price: 10},
  {name: "Ipad", price: 1022},
  {name: "Smart Phone", price: 120},
  {name: "Keyboard", price: 110},
  {name: "Mouse", price: 104},
]

// acc: Biriktirici (başlangıç değeri 0), current: o anki eleman (item).
// current.price ile her ürünün fiyatını topluyoruz.
const sumItemPrices = itemPrices.reduce((acc, current) => acc + current.price, 0)

console.log(sumItemPrices)  // 10 + 1022 + 120 + 110 + 104 = 1366


// Bir dizi içinde geçen her ismin kaç kez tekrar ettiğini bulacağız.
const users = ["Lorem", "Ipsum", "Derya", "Deniz", "Ipsum", "Deniz", "Lorem"]

// allUsers: Şu ana kadar saydığımız kullanıcıları tutan obje.
// current: O anki kullanıcı.
// Eğer current ismi daha önce geçtiyse, onun sayısını bir artır.
// Eğer daha önce geçmediyse, o isim için sayıyı 1 yapıyoruz.
// allUsers[current] ?? 0, nullish coalescing ile allUsers[current] undefined ise 0 döndürüyoruz.
const countedUsers = users.reduce((allUsers, current) => {
  const count = allUsers[current] ?? 0;  // current kullanıcısı daha önce varsa onun sayısını al, yoksa 0 al.
  return {
    ...allUsers,  // Önceki tüm kullanıcıları spread ile kopyala.
    [current]: count + 1  // current kullanıcısının sayısını 1 artır.
  }
}, {})  // Başlangıç değeri boş bir obje.

console.log(countedUsers)  // { Lorem: 2, Ipsum: 2, Derya: 1, Deniz: 2 }