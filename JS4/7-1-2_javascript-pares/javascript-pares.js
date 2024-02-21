// 2- Imprime los números pares entre dos números que introduzca el usuario.

document.write("2- Imprime los números pares entre dos números que introduzca el usuario <br>");

let x = parseInt(prompt("Introduce un número:"));
let y = parseInt(prompt("Introduce otro número:"));

for(let i=x; i<=y; i++){
    if (i%2==0){
        document.write(i + "<br>"); 
    }
}
