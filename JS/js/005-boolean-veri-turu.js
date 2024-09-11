// is has ile başlatmamız avantaj sağlamakta
let isUserActive = false;// 0
 
isUserActive = true; // 1
console.log("isUserActive:", isUserActive)

let user;
console.log(user)
console.log(Boolean(user));
console.log(Boolean(0.1)); // 0 dan büyük olan her şey true döner

console.log(Boolean(1>54)); 

console.log(
    Boolean(-0)
);
user ="loremipsum";
console.log(Boolean(user));  // bu user var mı anlamında
