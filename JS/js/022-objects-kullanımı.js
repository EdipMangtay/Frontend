
const firstName = "Edip";
const lastName = "Mangtay";
const age = 22;

const user = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    entries :[1,2,3,4,5]
};

const userV2 = {
    firstName,
    lastName,
    age,
    hobies: ["Music","Football"]
};

console.table(user);
console.table(userV2);


const input = "firstName";
console.log("input içerisindeki değişken bilgisini kullanabiliriz",user[input]);  // user.firstName

function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;

};
const car = new Car("Ford","Mustang",2021);
console.table(car);

delete car.year;
console.table(car);
