const hexInputContainer = document.querySelector("#hexInputContainer")  // HEX renk inputlarının ekleneceği kapsayıcıyı seçiyoruz.
const hexForm = document.querySelector("#hexColorForm")  // Form elemanını seçiyoruz.
const addNew = document.querySelector("#addNew")  // Yeni HEX inputu eklemek için kullanıcının tıklayacağı düğmeyi seçiyoruz.
let counter = 1  // Yeni inputlar için bir sayaç oluşturuyoruz, her yeni input eklendiğinde artırılacak.

addNew.addEventListener("click", () => {
  console.log("click")  // Tıklamayı test etmek için konsola "click" yazdırıyoruz.
  counter += 1  // Her tıklamada sayacı artırıyoruz.
  hexInputContainer.append( newHexColorInput(counter) )  // Yeni bir input alanı oluşturup hexInputContainer'a ekliyoruz.
})

function newHexColorInput(itemCount) {
  const newDivElement = document.createElement('div')  // Yeni bir 'div' elementi oluşturuyoruz.

  newDivElement.classList.add('col-sm')  // Oluşturduğumuz div'e 'col-sm' class'ı ekliyoruz (muhtemelen Bootstrap kullanıyorsunuz).

  newDivElement.innerHTML = `
  <label for="colorInput-${itemCount}" class="form-label">HEX Color</label>
  <input 
    id="colorInput-${itemCount}"
    type="text" 
    minlength="7" maxlength="7"  // HEX renk kodları 7 karakter uzunluğunda olduğundan bu şekilde ayarlıyoruz (örneğin: #FFFFFF).
    class="form-control" 
    name="color-${itemCount}"
  >
  `
  return newDivElement  // Div'i geri döndürüyoruz, bu sayede yukarıda append ile ekleyebiliyoruz.
}

hexInputContainer.append( newHexColorInput(counter) )  // Sayfa yüklendiğinde otomatik olarak ilk input alanını ekliyoruz.

let localStorageColors = localStorage.getItem("colors") ? JSON.parse(localStorage.getItem("colors")) : []  // LocalStorage'dan kaydedilmiş renkleri alıyoruz. Yoksa boş bir array başlatıyoruz.
const colorCards = document.querySelector("#colorCards")  // Renk paletlerinin gösterileceği container'ı seçiyoruz.

hexForm.addEventListener("submit", (event) => {
  event.preventDefault()  // Formun varsayılan olarak submit edilmesini engelliyoruz.

  let colors = []  // Formdan gelen renkleri kaydedeceğimiz bir array oluşturuyoruz.
  Array.from(event.target.elements).forEach(item => {  // Form elemanlarını döngüye alıyoruz.
    if (item.type === "text") {  // Sadece input type="text" olan elemanları kontrol ediyoruz.
      colors.push(item.value)  // Renk kodunu array'e ekliyoruz.
    }
  })
  localStorageColors.push(colors)  // Yeni renkleri LocalStorage'da tuttuğumuz array'e ekliyoruz.
  colorCards.append(
    addColorPalette(colors)  // Yeni renk paletini ekliyoruz.
  )
  
  localStorage.setItem("colors", JSON.stringify(localStorageColors))  // LocalStorage'da renkleri JSON formatında saklıyoruz.
  hexForm.reset()  // Formu sıfırlıyoruz.
})

if (localStorageColors.length) {  // Eğer LocalStorage'da daha önceden kaydedilmiş renkler varsa,
  localStorageColors.forEach(colors => {
    console.log(colors)  // Kayıtlı renkleri konsola yazdırıyoruz.
    colorCards.append(
      addColorPalette(colors)  // Sayfa yüklendiğinde eski renk paletlerini gösteriyoruz.
    )
  })
}

function addColorPalette(items) {
  const rowElement = document.createElement('div')  // Renk paletlerini yerleştireceğimiz bir 'row' div'i oluşturuyoruz.
  rowElement.classList.add('row', 'gap-3', 'my-3')  // Row'a Bootstrap class'ları ekliyoruz.

  items.forEach((item, index) => {  // Renkleri döngüyle her bir item (renk) için işliyoruz.
    console.log(item)  // Renk kodunu konsola yazdırıyoruz.
    const cardItem = document.createElement('div')  // Renk gösterimi için bir div oluşturuyoruz.
    cardItem.classList.add('col-sm', 'card', 'colorCard')  // Renk div'ine Bootstrap ve özel class'lar ekliyoruz.
    cardItem.style.backgroundColor = item  // Div'in arka plan rengini girilen HEX rengine göre ayarlıyoruz.
    rowElement.append(cardItem)  // Bu rengi row içerisine ekliyoruz.
  })
  
  return rowElement  // Oluşturduğumuz row'u geri döndürüyoruz.
}

const colorCardItems = document.querySelectorAll('.colorCard')  // Sayfada var olan renk kartlarını seçiyoruz.

colorCardItems.forEach(colorCard => {
  colorCard.addEventListener("click", () => {
    // Renk kartına tıklandığında o kartın arka plan rengini kopyalayarak panoya yapıştırıyoruz.
    navigator.clipboard.writeText(colorCard.style.backgroundColor);
    alert("Renk Kopyalandi..")  // Kullanıcıya renk kopyalandığına dair bir uyarı veriyoruz.
  })
})