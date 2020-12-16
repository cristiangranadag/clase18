'use strict'

var categorias = ['Acción','Terror','Comedia'];
var pelicula = ['Depredador','La profecía','Chicas malas']

var cine = [categorias,pelicula]

//Imprimir dato del vector
console.log(cine)

//Imprimir por conjunto de datos
for (let i = 0; i <3; i++) {
    console.log('Categoría: ' + cine[0][i])
        console.log('Película: ' + cine[1][i])  
}
 