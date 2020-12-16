class Perro{
    constructor(nombre,edad,estado,comida){
        this.nombre = nombre;
        this.edad = edad;
        this.estado = estado;
        this.comida =comida 
    }
}

var perroUno = new Perro('Rex','5 años',true,'Concentrado');
var perroDos = new Perro('Lucas','5 meses',false,'Concentrado');
var perroTres = new Perro('Pedro','10 años',false,'Concentrado');
var perroCuatro = new Perro('Paco','5 años',true,['Concentrado','Comida Humeda','Salchichas']);
var mascota =[];
var comida =[];
mascota.push(perroUno,perroDos,perroTres,perroCuatro)

console.log(" Nombre del perro: "+ mascota[3].nombre + " Come: " + mascota[3].comida[2]);

console.log(mascota);
for (let index = 0; index < mascota.length; index++) {
    
    if(mascota[index].estado == false){
        console.log("Perro Muerto: " + mascota[index].nombre)
    }
}

for (let index = 0; index < mascota.length; index++) {
    for (let index = 0; index < comida.length; index++) {
        console.log(mascota[3].comida[2])
        if(mascota[index].comida[index] == 'Salchichas'){
        // if(mascota[index].comida == (mascota[3].comida[2])){
            console.log("Perro come salchicas: " + mascota[index].nombre)
        }
    }
}