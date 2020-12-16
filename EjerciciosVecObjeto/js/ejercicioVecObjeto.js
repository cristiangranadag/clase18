/*var perro1 = 
    {
        nombre :"Lucas",edad: "5 años",vivo: true
    }
 var perro2 = 
    {
        nombre :"Totto",edad: "5 años",vivo: false
    }
*/
function Perro(nombre,edad,vivo){
    this.nombre =nombre;
    this.edad = edad;
    this.vivo = vivo;
};

var perroUno = new Perro('rex','5 meses',true)
var perroDos = new Perro('Lucas','5 años',true)
var perroTres = new Perro('Pedro','12 años',true)

var mascotas = []
mascotas.push(perroUno,perroDos,perroTres)

console.log(mascotas)

for (let index = 0; index < mascotas.length; index++) {
    document.write(mascotas[index].nombre+ " - "  + mascotas[index].edad + "<br/>")
}