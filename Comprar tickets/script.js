const valorDeTicket = 200;

const cantidadTickets = document.getElementById('cantidadTickets');
const categoria = document.getElementById('categoria');
const botonResumen = document.getElementById('resumen');
const parrafoTotal = document.getElementById('parrafoTotal');
const botonBorrar = document.getElementById('borrar');
const nombre = document.getElementById('inputNombre');
const apellido = document.getElementById('inputApellido');


botonResumen.addEventListener('click',()=>{
    
    let dineroTotal = (cantidadTickets.value) * 200;
    
    if (categoria.value == 1){
        dineroTotal = dineroTotal - (dineroTotal * 0.8);
    } else if (categoria.value == 2){
        dineroTotal = dineroTotal - (dineroTotal * 0.5);
    }else if (categoria.value == 3){
        dineroTotal = dineroTotal - (dineroTotal * 0.15);
    }
    
    parrafoTotal.textContent = `Total a pagar: $${dineroTotal}`;
});

borrar.addEventListener('click',()=> {
            location.reload();
})
