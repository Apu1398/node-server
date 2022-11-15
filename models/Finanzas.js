const mongoose = require("mongoose");

const Finanza = new mongoose.Schema({
  monto: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  responsable: {
    type: String,
    required: true,
  },
  departamento: {
    type: String,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  }
});

const Finanzas = mongoose.model("Finanzas", Finanza);

module.exports = Finanzas;
