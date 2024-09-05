// Diziler -> Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Farklı türde öğeler içeren bir 'users' dizisi oluşturuyoruz
const users = [999, 2999, 3999, false, true, null, [4, 5, 6], "Deniz", "Derya"]

// 'users' dizisini ekrana yazdırıyoruz
console.log(users)

// 'users' dizisinin uzunluğunu (eleman sayısını) ekrana yazdırıyoruz
console.log("users.length", users.length)

// Boş bir dizi (array) tanımlıyoruz
const otherUsers = []

// 'otherUsers' dizisinin uzunluğunu (eleman sayısını) ekrana yazdırıyoruz
console.log("otherUsers.length", otherUsers.length)

// 100 uzunluğunda boş bir dizi oluşturuyoruz
const tech = new Array(100)

// 'tech' dizisinin uzunluğunu (eleman sayısını) ekrana yazdırıyoruz
console.log("tech.length", tech.length)

// 'tech' dizisinin içeriğini ekrana yazdırıyoruz
console.log("tech Arr:", tech)

// İçinde "item 1" ve "item 2" olan yeni bir dizi oluşturuyoruz
const todo = new Array("item 1", "item 2")

// 'todo' dizisini ekrana yazdırıyoruz
console.log("todo", todo)

// 'users' dizisinin veri tipini kontrol ediyoruz ve ekrana yazdırıyoruz (array, object tipindedir)
console.log("Type Bilgisi Nedir?", typeof(users))

// {} ile boş bir obje oluşturuyoruz ve veri tipini kontrol ediyoruz
console.log("{} Obj -> Type Bilgisi Nedir?", typeof( {} ))

// 'users' bir dizi mi diye kontrol ediyoruz ve sonucu ekrana yazdırıyoruz
console.log("Array misin :) ", Array.isArray(users))

// Bilgiye Erişmek:
// 'users' dizisindeki 0., 3. ve 7. elemanları ekrana yazdırıyoruz
console.log( users[0], users[3], users[7] )

// 'users' dizisinin son elemanını ekrana yazdırıyoruz
console.log( users[users.length - 1] ) // bu cok onemli cunku array'deki son ogeye erismek her zaman onemlidir..

// 'users' dizisinin sondan bir önceki elemanını ekrana yazdırıyoruz
console.log( users[users.length - 2] )

// 'users' dizisinin 6. elemanının içindeki 1. indeksi (yani [4, 5, 6] içindeki 5'i) ekrana yazdırıyoruz
console.log( users[6][1] )

// Yeni Öğe Eklemek:
// Dizinin sonuna bir öğe ekliyoruz
users.push("Lorem")
console.log( users )

// Dizinin başına bir öğe ekliyoruz
users.unshift("Ilk Siraya Eklenen Oge")
console.log( users )

// Bilgiyi Değiştirmek:
// 'users' dizisinin 3. elemanını değiştiriyoruz
users[3] = "w4w354" 
console.log( users )

// Bir Ögeyi Silmek:
// Dizinin sonundaki öğeyi çıkartıyoruz
const popItem = users.pop() // son öğeyi çıkartır
console.log( users )
console.log( popItem ) // Çıkartılan öğeyi ekrana yazdırıyoruz

// Dizinin başındaki öğeyi çıkartıyoruz
const firstItem = users.shift() // ilk öğeyi çıkartır
console.log( users )
console.log( firstItem ) // Çıkartılan öğeyi ekrana yazdırıyoruz