"use strict";

let mhsController = require("./mahasiswaController");

const MahasiswaRoute = function(ctx) {
  const server = ctx.server,
    db = ctx.db;
  const collection = db.collection("mahasiswa");

  server.get("/mahasiswa", (req, res, next) => {
    mhsController.getMhs(collection, (respon, error) => {
      if (error) {
        throw error;
      }
      res.json(respon);
    });
  });

  server.post("/mahasiswa", (req, res, next) => {
    var data = req.body;
    mhsController.postMhs(data, collection, (respon, error) => {
      if (error) {
        throw error;
      }
      res.json(respon);
    });
  });

  server.del("/mahasiswa/:kodemhs", (req, res) => {
    var kodeMhs = req.params.kodemhs;
    mhsController.delMhs(kodeMhs, collection, (respon, error) => {
      if (error) {
        throw error;
      }
      res.json(respon);
    });
  });

  server.put("/mahasiswa/:kodemhs", (req, res) => {
    var kodeMhs = req.params.kodemhs;
    var data = req.body;
    mhsController.putMhs(kodeMhs, data, collection, (respon, error) => {
      if (error) {
        throw error;
      }
      res.json(respon);
    });
  });
};

module.exports = { MahasiswaRoute: MahasiswaRoute };
