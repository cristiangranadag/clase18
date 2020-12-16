var Bob =['Carlos', ' Diego', 'Juan']

var persona = {
    nombre: [ Bob, 'Smith'],
    edad: 32,
    genero: 'masculino',
    intereses: ['música', 'esquí'],
    bio: function () {
      alert('Hola');
    },
    saludo: function() {
      alert('Hola, Soy '+ this.nombre[0] + '. ');
    }
  };

  console.log(persona.nombre[0])