let firstName = "Edip"
let lastName = 'Mangtay'
let training = `Template Literals JS`
let age = 22;


let info = `${firstName} ${lastName}`
// firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase() + 
// " " + lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()

info = `Merhaba ${firstName[0].toUpperCase()}${firstName.toLowerCase().slice(1)} ${lastName[0].toUpperCase()}${lastName.toLowerCase().slice(1)}, gelecek sene yasin ${age + 1}

Blok Yazi Bile Yazabiliriz..
`

console.log(`${firstName} ${lastName}`)
console.log(info)