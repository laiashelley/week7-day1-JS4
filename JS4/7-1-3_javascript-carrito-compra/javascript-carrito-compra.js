let precio = 0;
let descuento = 15;

for (let i = 0; i < 5; i++) {
  let precioUsuario = parseFloat(prompt("Introduce un precio"));
  precio = precio + precioUsuario;
}

let total;

if (precio >= 100) {
  total = precio - (precio * descuento) / 100;
  document.write("<h1>Detalle del total de compra:</h1>" + precio);
  document.write("<h3>El precio total con descuento es:</h3>" + total);
} else {
  total = precio;
  document.write("<h1>Detalle del total de compra:</h1>" + precio);
  document.write("<h3>El precio total sin descuento es:</h3>" + precio);
}
