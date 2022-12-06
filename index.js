//Declaración
//1.- Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo, matricula
const Coche = {
    marca: "fiat",
    modelo: "500",
    matricula: "34834"
    }
    //2.- Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal, piso
    const Casa = new Object();
    Casa.codPostal = "38432"
    Casa.calle = "Pi"
    Casa.portal = "23"
    Casa.piso = "2a"
    //3.- Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes, array proyectos
    const FullStackDeveloper = new Object();
    FullStackDeveloper.lenguajes = ["dawda", "awdaw"]
    FullStackDeveloper.proyectos = ["daswda", "awdaaw"]
    //4.- Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color, edad, función ladrar (imprime por consola un ladrido), función popo (devuelve el valor: Math.random() * 3)
    const Perro = new Object();
    Perro.nombre = "Kika"
    Perro.raza = "caniche"
    Perro.color = "blanco"
    Perro.edad = 17
    Perro.ladrar = function () {
        console.log("Guau!");
    }
    Perro.popo = function () {
        return Math.random() * 3
    }
    //Lectura de propiedades
    //5.- Dado un objeto de nombre Portatil obtén el valor de la propiedad marca con .marca guardándolo en la variable marcaPortatil
    let marcaPortatil = Portatil.marca;
    //6.- Dado un objeto de nombre Portatil obtén el valor de la propiedad marca con ["marca"] guardándolo en la variable marcaPortatil2
    let marcaPortatil2 = Portatil["marca"];
    //7.- Dado un objeto de nombre Concierto obtén el valor de la propiedad array grupos guardándolo en la variable grupos
    let grupos = Concierto.grupos;
    //8.- Dado un objeto de nombre Led obtén el valor de las propiedades rojo, verde y azul guardándolo en la variable array RGB[Rojo, Verde, Azul]
    let RGB = [];
    RGB[0] = Led.rojo;
    RGB[1] = Led.verde;
    RGB[2] = Led.azul;
    //Modificación de propiedades
    //9.- Dado un objeto de nombre Portatil modifica el valor de la propiedad modelo por el valor P345
    Portatil.modelo = "P345";
    //10.- Dado un objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad cartelera
    Concierto.cartelera.push("Guns N' Roses");
    //11.- Dado un objeto de nombre Concierto modifica el valor de la propiedad fecha por el valor new Date() (fecha de hoy)
    Concierto.fecha = new Date(02 / 12 / 2022);
    //12.- Dado un objeto de nombre Impresora modifica el valor de la propiedad imprimiendo por el valor objeto con propiedades: nombreArchivo, copias, numPaginas
    const objeto = new Object();
    objeto.nombreArchivo,
        objeto.copias,
        objeto.numPaginas
    Impresora.imprimiendo = objeto;
    //Declaración
    //13.- Crea un objeto de nombre Noticia que tenga las propiedades: titular, cuerpo
    const Noticia = new Object();
    Noticia.titular = "Avistamientos"
    Noticia.cuerpo = "Se han visto onnis en las cercanias"
    //14.- Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos, edad
    const Persona = new Object();
    Persona.nombre = "Jesús"
    Persona.apellidos = "Cristo"
    Persona.edad = "33"
    //15.- Crea un objeto de nombre Avion que tenga las propiedades: numPasajeros, función despegar (imprime por consola 'despegando'), función volar (imprime por consola llegando al destino), función aterrizar (imprime por consola 'aterrizando'
    const Avion = new Object();
    Avion.numPasajeros = 70
    Avion.despegar = function () {
        console.log("despegando");
    }
    Avion.volar = function () {
        console.log("llegando al destino");
    }
    Avion.aterrizar = function () {
        console.log("aterrizando");
    }
    //16.- Crea un objeto de nombre Paquete que tenga las propiedades: array contenido con todos los objetos que contenga el paquete
    const Paquete = new Object();
    Paquete.contenido = ["broca", "martillo", "clavos", "tacos"]
    //17.- Crea un objeto de nombre Pais que tenga las propiedades: numHabitantes, continente, gentilicio
    const Pais = new Object();
    Pais.numHabitantes = 2000000
    Pais.continente = "Europa"
    Pais.gentilicio = "murciano"
    //Lectura de propiedades
    //18.- Dado un objeto de nombre O_Error obtén el valor de la propiedad codigo guardándolo en la variable codError
    let codError = O_Error["codigo"];
    //19.- Dado un objeto de nombre Grupo obtén el valor de la propiedad array integrantes guardándolo en la variable integrantes
    let integrantes = Grupo.integrantes;
    //20.- Dado un objeto de nombre Impresora obtén el valor de la propiedad objeto tinta{rojo, verde, azul} guardándolo en la variable nivelesTinta
    let nivelesTinta = Impresora.tinta;
     //21.- Dado un objeto de nombre Pantalla obtén el valor de la propiedad array bidimensional pixeles guardándolo en la variable pixeles
    let pixeles = Pantalla.pixeles;
     //22.- Dado un objeto de nombre Movil obtén el valor de la propiedad especificaciones con ["especificaciones"] guardándolo en la variable especificaciones
    let especificaciones = Movil["especificaciones"];
    //Modificación de propiedades
     //23.- Dado un objeto de nombre Grupo modifica el valor de la propiedad numIntegrantes por el valor 5
    Grupo.numIntegrantes = 5;
     // 24.- Dado un objeto de nombre Pantalla modifica el valor de la propiedad dimensiones por el valor 1920x1080
    Pantalla.dimensiones = "1920x1080";
     //25.- Dado un objeto de nombre Led modifica el valor de la propiedad encendido por el valor false si vale true y true si vale false
    if (Led.encendido == true) {
        Led.encendido = false;
    }else{
        Led.encendido = true;
    }
     //26.- Dado un objeto de nombre Movil modifica el valor de la propiedad temperatura por el valor 20º
     Movil.temperatura = "20º";