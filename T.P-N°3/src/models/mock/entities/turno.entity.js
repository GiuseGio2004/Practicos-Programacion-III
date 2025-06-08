const Identificador = require("./identificador.entity");

class Turno extends Identificador {
  constructor(idPaciente, fecha, hora, id = null) {
    super(id); // Llama al  Identificador
    this.idPaciente = idPaciente;
    this.fecha = fecha;
    this.hora = hora;
    this.id = null;
  }
}

module.exports = Turno;