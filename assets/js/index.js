let precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

//variables//
let cantidad = document.querySelector(".cantidad");
let masbtn = document.getElementById("mas");
let menosbtn = document.getElementById("menos");
let cantidades = 0;


masbtn.addEventListener("click", () => {
    console.log("click");
    cantidades++;
    cantidad.textContent = cantidades;
    actualizarTotal();
});

menosbtn.addEventListener("click", () => {
    console.log("click");
    if (cantidades > 0) {
        cantidades--;
        cantidad.textContent = cantidades;
        actualizarTotal();
    }
})

//funciones//
function actualizarTotal() {
    let total = cantidades * precio;
    document.querySelector(".valor-total").textContent = total;
}





