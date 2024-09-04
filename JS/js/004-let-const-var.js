let user1 = "1. user"
console.log(user1);
console.log
(   
    "2. user"
);

let user;
console.log(user); // undefined
user = "Mangtay"; // değişiklik yapıldı 
console.log(user); // Mangtay

const password = 1234; // const keywordü ile sabit bir değişken tanımlanır
console.log(password); // 1234
//Conts kullanarak bir kez tenaımlama yapılabilir
// password = 5678; // TypeError: Assignment to constant variable
//blok içerisinde tekrar aynı isimler kullanılaiblir 
{
    const password = 5678; // buradaki conts password farklı çünkü farklı blok içerisinde yer alıyor 
    console.log(password); // 5678
}
