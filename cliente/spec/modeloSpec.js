describe("Bombergame", function() {
  var juego;

  beforeEach(function() {
    juego=new Juego();
  });

  it("comprobaciones iniciales", function() {
    expect(juego.usuarios.length).toEqual(0);
    expect(juego.partidas.length).toEqual(0);
  });

  it("agregar usuarios", function() {
    juego.agregarUsuario('pepe');
    juego.agregarUsuario('ana');
    expect(Object.keys(juego.usuarios).length).toEqual(2);
    expect(juego.usuarios["pepe"]).not.toBe(undefined);
    expect(juego.usuarios["ana"]).not.toBe(undefined);
  });

  it("comprobaciones partida creada", function() {
    juego.agregarUsuario('pepe');
    juego.crearPartida('una','pepe');
    expect(Object.keys(juego.partidas).length).toEqual(1);
    expect(juego.partidas["unapepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].idp).toBe("unapepe");
  });

  it("unir a partida", function() {
    //Agregamos usuarios
    juego.agregarUsuario('pepe');
    juego.agregarUsuario('ana');
    expect(Object.keys(juego.usuarios).length).toEqual(2);
    expect(juego.usuarios["pepe"]).not.toBe(undefined);
    expect(juego.usuarios["pepe"].nick).toBe("pepe");
    expect(juego.usuarios["ana"]).not.toBe(undefined);
    expect(juego.usuarios["ana"].nick).toBe("ana");

    //Creamos la partida con pepe
    juego.crearPartida('una','pepe');
    expect(Object.keys(juego.partidas).length).toEqual(1);
    expect(juego.partidas["unapepe"]).not.toBe(undefined);

    //Añadimos a ana a la partida
    juego.unirAPartida('unapepe','ana');
    expect(Object.keys(juego.partidas['unapepe'].jugadores).length).toEqual(2);
  });
  
  it("salir de partida", function() {
    juego.agregarUsuario('pepe');
    juego.crearPartida('una','pepe');
    expect(Object.keys(juego.partidas).length).toEqual(1);
    expect(juego.partidas["unapepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].idp).toBe("unapepe");
    juego.partidas["unapepe"].salir("pepe");
    expect(Objetc.keys(juego.partidas["unapepe"].jugadores).length).toEqual(0);
  });

   it("comprobar usuario pepe sale de partida unapepe que tiene dos jugadores", function() {
    juego.agregarUsuario('pepe');
    juego.crearPartida('una','pepe');
    var partida=juego.partidas["unapepe"];
    expect(Object.keys(juego.partidas).length).toEqual(1);
    expect(partida).not.toBe(undefined);
    expect(partida.idp).toBe("unapepe");
    juego.agregarUsuario('ana');
    juego.unirAPartida("unapepe","ana");
    //juego.salir("unapepe","pepe");
    //expect(partida.jugadores["pepe"])toBe(undefined);
    //expect(Object.keys(partida.jugadores).length).toEqual(1);
  });

  it("comprobar usuario pepe sale de partida unapepe y se elimina", function() {
    juego.agregarUsuario('pepe');
    juego.crearPartida('una','pepe');
    expect(Object.keys(juego.partidas).length).toEqual(1);
    expect(juego.partidas["unapepe"]).not.toBe(undefined);
    expect(juego.partidas["unapepe"].idp).toBe("unapepe");
    juego.partidas["unapepe"].salir("pepe");
    expect(juego.partidas["unapepe"])toBe(undefined);
  });


});
