// JSONPlaceholder API'sine ve başka bir yerel JSON dosyasına erişmek için URL'ler
const JSONPlaceHolderApi = 'https://jsonplaceholder.typicode.com/todos/'

// JSONPlaceholder API'ye yapılan örnek bir fetch isteği, yanıtı logluyor ve JSON formatına çeviriyor
// fetch('https://jsonplaceholder.typicode.com/todos/').then(response => {
//   console.log(response) // Ham yanıtı loglar
//   return response.json() // Yanıtı JSON formatına çevirir
// }).then(json => console.log(json)) // JSON verisini loglar

// DOM'daki '#app' elementini seçiyor ve görev maddelerini eklemek için bir 'ul' elementi oluşturuyor
const app = document.querySelector('#app')
const createUlElement = document.createElement('ul')
app.append(createUlElement) // Oluşturulan 'ul' elementini '#app' elementine ekler

// JSONPlaceholder'dan veri alıyor ve her görev başlığını 'li' elementine ekliyor
fetch(JSONPlaceHolderApi)
  .then(res => res.json()) // Yanıtı JSON formatına çevirir
  .then(json => {
    // Aşağıdaki kod yorum satırına alınmış, ancak JSON öğelerini döngüyle geçerek 'ul' elementine ekliyor
    // json.forEach(item => {
    //   const liElement = document.createElement('li')
    //   liElement.innerHTML = item.title
    //   createUlElement.append(liElement)
    // })
  })

// Yerel bir JSON dosyasını (js/047-json-file.json) getiriyor, yanıtı logluyor ve hataları yakalıyor
fetch('js/047-json-file.json')
  .then(res => {
    console.log(res) // Yanıtı loglar (başarı ya da hata)
    return res.json() // Yanıtı JSON formatına çevirir
  })
  .then(res => console.log(res)) // JSON verisini loglar
  .catch(err => console.error(err)) // Fetch sırasında oluşabilecek hataları yakalar ve loglar

// Belirtilen URL'den görevleri getiren ve her görev başlığını 'ul' elementine ekleyen async fonksiyon
async function getTasks(URL) {
  const response = await fetch(URL); // Veriyi asenkron olarak getirir
  const jsonData = await response.json(); // Yanıtı JSON formatına çevirir
  jsonData.forEach(item => {
    const liElement = document.createElement('li') // Her görev için yeni bir 'li' elementi oluşturur
    liElement.innerHTML = item.title // 'li' elementinin içeriğini görev başlığı ile doldurur
    createUlElement.append(liElement) // 'li' elementini 'ul' elementine ekler
  })
}

// Async fonksiyonu çağırarak JSONPlaceholder API'den görevleri getirir
getTasks(JSONPlaceHolderApi)