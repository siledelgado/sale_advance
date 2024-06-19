const numberElement = document.getElementById("number");
const priceElement = document.getElementById("product");

let purchases = []; // ARREGLO PARA ALMACENAR LAS COMPRAS

function add() {
    if (numberElement.value === "0" || priceElement.value === "0") { // VALIDA QUE SE HAYAN SELECCIONADO PRODUCTO Y CANTIDAD
        window.alert("Debe completar el campo");
    } else {
        const id = parseInt(priceElement.value);
        const producto = returnProducto(id); // LLAMA A LA FUNCIÓN PARA OBTENER EL PRODUCTO
        const number = parseInt(numberElement.value);
        const price = parseInt(producto.price);

        let purchase = {
            description: producto.nombre,
            number: number,
            price: price,
        };
        purchases.push(purchase); // AGREGA LA COMPRA AL ARREGLO

        window.alert(`Producto: ${purchase.description}\nImporte: ${purchase.price} Guaraníes\nCantidad: ${purchase.number}`);
    }
}

function returnProducto(id) {
    for (let index = 0; index < productos.length; index++) {
        if (id === productos[index].id) {
            return productos[index]; // RETORNA EL PRODUCTO CORRESPONDIENTE AL ID
        }
    }
    
    console.log("Producto no encontrado"); // MENSAJE SI NO SE ENCUENTRA EL PRODUCTO
    return null;
}

function display() {
    let string = "";
    for (let index = 0; index < purchases.length; index++) {
        string += `${purchases[index].number} Items de ${purchases[index].description} a ${purchases[index].price} Guaraníes\n`;
    }
    return string;
}

function subtotal() {
    let sum = 0;
    for (let index = 0; index < purchases.length; index++) {
        sum += purchases[index].number * purchases[index].price; // CALCULA EL SUBTOTAL DE LAS COMPRAS
    }
    return sum;
}

function calc() {
    const sum = subtotal(); // OBTIENE EL SUBTOTAL
    const postage = calcPostageFromPurchase(sum); // OBTIENE EL COSTO DE ENVÍO SEGÚN EL SUBTOTAL

    window.alert(`Resumen de la compra:\n\n${display()}\nSubtotal: ${sum} Guaraníes\nGastos de envío: ${postage} Guaraníes\nTotal: ${sum + postage} Guaraníes`);

    purchases = []; // LIMPIA EL ARREGLO DE COMPRAS
    numberElement.value = "";
    priceElement.value = "";
}

function calcPostageFromPurchase(sum) {
    if (sum === 0 || sum >= 3000) {
        return 0; // ENVÍO GRATUITO SI EL SUBTOTAL ES CERO O MÁS DE 3000
    } else if (sum < 2000) {
        return 500; // COSTO DE ENVÍO DE 500 PARA SUBTOTAL MENOR A 2000
    } else {
        return 250; // COSTO DE ENVÍO DE 250 PARA SUBTOTAL ENTRE 2000 Y 3000
    }
}

var productos = [
    {
        id: 1,
        nombre: "Mezcla original 200g",
        price: 500,
    },
    {
        id: 2,
        nombre: "Mezcla original 500g",
        price: 900,
    },
    {
        id: 3,
        nombre: "Mezcla especial 200g",
        price: 700,
    },
    {
        id: 4,
        nombre: "Mezcla especial 500g",
        price: 1200,
    },
];
