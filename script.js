// Funcionamiento del Carrusel
// "next y prev" : Seleccionamos los botones
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

// Le agregamos un evento "click" al boton next
next.addEventListener('click', function(){ // Se ejecuta al darle click
    let items = document.querySelectorAll('.item') // Llamamos a todos los elementos con clase ('.item')
    document.querySelector('.slide').appendChild(items[0]) // Movemos el primer elemento al final del slide
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})