// https://developer.mozilla.org/en-US/docs/Web/API/Document/title

// document.title = prompt("En Sevdigin Dil Nedir?", "JS")

document.title = "JS -> ES6+"

// https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName

// h1 icindeki bilgi:
// document.getElementsByTagName('h1')[0].innerHTML
console.log(
  document.getElementsByTagName('h1')[0].innerHTML
)


// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// document.getElementById('title').innerHTML = 'js'

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
console.log(
  document.getElementsByClassName('text-primary')
)

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// Bundan sonra secim icin sadece asagidaki iki yontemi kullacagiz;
// etikele sec:
const h1Element = document.querySelector('h1')
const firstTitleClass = document.querySelector('.title')
const titleId = document.querySelector('#title')

console.log(h1Element.innerHTML)
console.log(firstTitleClass.innerHTML)
console.log(titleId.innerHTML)

const appElement = document.querySelector('#app')
appElement.innerHTML = "<h2>React App Buraya Eklendi</h2>"

// ilk div icindeki p icindeki ilk span
const spanElement = document.querySelector('#info>p>span')
console.log(spanElement)


// birden fazla etiket secmek ?
const listItems = document.querySelectorAll('li.list-item')
console.log(listItems)

// İlk olarak HTML dökümanından çeşitli elementleri seçmek için querySelector ve querySelectorAll kullanacağız.

// 1. querySelector ile ilk div elementini seçelim.
let firstDiv = document.querySelector('div');
// Bu, sayfadaki ilk div elementini döner. Eğer birden fazla div varsa sadece ilki seçilir.
console.log(firstDiv); // Konsola ilk div elementini yazdırır.

// 2. querySelector ile ID'ye göre bir element seçelim.
let specificElement = document.querySelector('#myID');
// Bu, ID'si "myID" olan elementi seçer. Sayfada bu ID'ye sahip sadece bir element olmalıdır.
console.log(specificElement); // Konsola bu spesifik elementi yazdırır.

// 3. querySelector ile class'a göre bir element seçelim.
let classElement = document.querySelector('.myClass');
// Bu, class'ı "myClass" olan **ilk** elementi seçer. Birden fazla class olabilir, ancak sadece ilk element seçilir.
console.log(classElement); // Konsola bu class'ı olan ilk elementi yazdırır.

// 4. querySelector ile attribute'a göre bir element seçelim.
let attributeElement = document.querySelector('[type="text"]');
// Bu, attribute'u "type" olan ve değeri "text" olan elementi seçer. Örneğin, bir input elementini seçmek için kullanılır.
console.log(attributeElement); // Konsola bu attribute'a sahip elementi yazdırır.

// 5. querySelectorAll ile tüm div elementlerini seçelim.
let allDivs = document.querySelectorAll('div');
// Bu, sayfadaki tüm div elementlerini seçer ve bir NodeList (liste) olarak döner. Bu listeye döngüyle erişilebilir.
console.log(allDivs); // Konsola tüm div elementlerini yazdırır (NodeList).

// 6. querySelectorAll ile aynı class'a sahip tüm elementleri seçelim.
let allItems = document.querySelectorAll('.item');
// Bu, class'ı "item" olan **tüm** elementleri seçer ve bir NodeList olarak döner.
console.log(allItems); // Konsola tüm "item" class'ına sahip elementleri yazdırır.

// 7. querySelectorAll ile belirli bir tag içinde class araması yapalım.
let specificDivItems = document.querySelectorAll('div.item');
// Bu, hem "div" tagine hem de "item" class'ına sahip olan tüm elementleri seçer.
console.log(specificDivItems); // Konsola sadece div tag'ı olup, item class'ına sahip elementleri yazdırır.

// 8. querySelector ile iç içe seçiciler kullanalım.
let nestedSelector = document.querySelector('div .innerClass');
// Bu, bir div'in içinde class'ı "innerClass" olan ilk elementi seçer.
console.log(nestedSelector); // Konsola iç içe seçiciyle bulunan elementi yazdırır.