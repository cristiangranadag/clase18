var persona = 
{
    nombre:['Juan','Sebastian'],
    // Apellido:['Cano','Lopez'],
    Apellido:[['Cano', 'Sanchez'],'Lopez'],
    edad: 34,
    fechaNacimiento: '12/02/2020',
    saludar: function(){
        console.log('Hola Clase')
    }
}
// console.log(persona)
// console.log(persona.nombre)
// console.log(persona.nombre[0])
// console.log(persona.Apellido[0]) 
console.log(persona.Apellido[0][1]) 