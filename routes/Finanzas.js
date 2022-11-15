const express = require("express");
const Finanzas = require("../models/Finanzas");
const app = express();

const cors = require('cors');
app.use(cors());


app.get("/Finanzas", async (request, response) => {
    const finanzas = await Finanzas.find({});

    try {
      response.send(finanzas);
    } catch (error) {
      response.status(500).send(error);
    }
  });


app.post("/Finanzas", async (req, res) => {

  const finanzas = new Finanzas({
	  monto: req.body.monto,
	  descripcion: req.body.descripcion,
	  responsable: req.body.responsable,
	  departamento: req.body.departamento,
	  fecha: req.body.fecha

  });
	finanzas
	.save(finanzas)
	.then(data => {
	res.send(data);
	})
	.catch(err => {
        res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
        });
	});
});


module.exports = app;
