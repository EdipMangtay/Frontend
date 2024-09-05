const famaleUsers = ["Deniz","Mavi","Kıymet"];
const maleUsers = ["Kemal","Edip","Ali"];
const items = [1,2,3,4,5,6,7,8,9];
const maxItems = [1,2,200,100,1000,99,3,4,5,6,7,8,9];

//Split Metodu : Dizi elemanlarını ayırmak için kullanılır.
const users = "Deniz,Mavi,Edip,Kemal";
const userArray = users.split(","); //Virgülle ayırarak diziye çevirir.
console.log(userArray); //["Deniz", "Mavi", "Edip", "Kemal"]

//Slice Metodu : Dizi elemanlarını kesmek için kullanılır."
const newUsers = userArray.slice(1,3); //1. indexten başla 3. indexe kadar al.
console.log(newUsers); //["Mavi", "Edip"]

//includes Metodu : Dizi içerisinde aranan eleman var mı yok mu kontrol eder. boolean değer döner.
const isUser = userArray.includes("Deniz");
console.log(isUser); //true

//indexOf Metodu : Dizi içerisinde aranan elemanın indexini döner.
const userIndex = userArray.indexOf("Mavi");
console.log(userIndex); //1

//sort Metodu : Dizi elemanlarını sıralamak için kullanılır. Sıralama alfabetik olarak yapılır.
const sortedUsers = userArray.sort();
console.log(sortedUsers); //["Deniz", "Edip", "Kemal", "Mavi"]

//toString Metodu : Dizi elemanlarını stringe çevirir. 
const userString = userArray.toString
console.log (userString); //Deniz,Edip,Kemal,Mavi

//join Metodu : Dizi elemanlarını birleştirir.
const userJoin = userArray.join(items);
console.log(userJoin); //Deniz1,2,3,4,5,6,7,8,9Edip1,2,3,4,5,6,7,8,9Kemal1,2,3,4,5,6,7,8,9Mavi