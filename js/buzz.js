// dichiaro la constante per richiamare le celle su html
// dichiaro la let per il ciclo for
const cells = document.getElementById ("cells");
let x = 0;

for (let i = 0; i < 100; i++) {
    x = i + 1;
    let valore = "";
    
    if ((x % 3 == 0) && (x % 5 == 0)) {
        console.log("FizzBuzz");
        cells.innerHTML += `<div class="my-col bg-danger">FizzBuzz</div>`;
    } else if (x % 3 == 0) {
        console.log("Fizz");
        cells.innerHTML += `<div class="my-col bg-success">Fizz</div>`;
    } else if (x % 5 == 0) {
        console.log("Buzz");
        cells.innerHTML += `<div class="my-col bg-warning">Buzz</div>`;
        // nell'else devo stampare il valore corrente quindi "x" 
    } else {
        console.log(x);
        valore = x;
        cells.innerHTML += `<div class="my-col">${valore}</div>`;
    }
}