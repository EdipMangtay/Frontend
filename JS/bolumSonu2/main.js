console.log("window.location.hash", window.location.hash)
console.log("window.location.port", window.location.port)
console.log("window.location.host", window.location.host)
console.log("window.location.hostname", window.location.hostname)


const hasLinks = document.querySelectorAll('.hash-route-link')
hasLinks.forEach(item => item.addEventListener('click',(event) =>{
    console.log(item)
}));

