let text = document.getElementById('thanks')
let para = "Thank You! "

let x = 1

setInterval(() => {
    text.innerText = para.slice(0, x)
    if (x < para.length) {
        x++
    } else {
        x = 1
    }
}, 500);

console.log("running")