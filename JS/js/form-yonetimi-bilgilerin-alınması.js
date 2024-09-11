const regisgterForm = document.querySelector('#registerForm');

regisgterForm.addEventListener('submit', (event) => {
    event.preventDefault(); // burası formun gönderilmesini engelliyor
    console.log(event); // form gönderildiğinde bu mesajı konsola yazdırır

    // const firstName = document.querySelector("input[name='firstName']");
    // console.log(firstName.value);

    console.log(event.target.elements);
});