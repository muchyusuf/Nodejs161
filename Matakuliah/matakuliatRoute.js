"use strict";

let mklController = require("./matakuliahController");

const MatakuliahRoute = function(ctx) {
  const server = ctx.server,
    db = ctx.db;
  const collection = db.collection("Matakuliah");

  server.get("/matakuliah", (req, res, next) => {
    mklController.getMkl(collection, (respon, error) => {
      if (error) {
        throw error;
      }
      res.json(respon);
    });
  });

  server.post("/matakuliah", (req, res, next) => {
    var data = req.body;
    mklController.postMkl(data, collection, (respon, error) => {
      if (error) {
        throw error;
      }
      res.json(respon);
    });
  });

  server.del("/matakuliah/:kodemkl", (req, res) => {
    var kodemkl = req.params.kodemkl;
    mklController.delMkl(kodemkl, collection, (respon, error) => {
      if (error) {
        throw error;
      }
      res.json(respon);
    });
  });

  server.put("/matakuliah/:kodemkl", (req, res) => {
    var kodemkl = req.params.kodemkl;
    var data = req.body;
    mklController.putMkl(kodemkl, data, collection, (respon, error) => {
      if (error) {
        throw error;
      }
      res.json(respon);
    });
  });
};

module.exports = { MatakuliahRoute: MatakuliahRoute };
