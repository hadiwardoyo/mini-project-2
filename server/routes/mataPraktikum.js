const matprakRoute = require("express").Router();
const { MataPraktikumController } = require("../controllers");
const { verifyToken } = require('../middleware/authentication')

matprakRoute.get("/data", verifyToken, MataPraktikumController.getMatprak);

matprakRoute.post("/add", verifyToken, MataPraktikumController.add);

matprakRoute.delete("/delete/:idMatkul/:idPraktikan", verifyToken, MataPraktikumController.delete);

matprakRoute.put("/update/:id", verifyToken, MataPraktikumController.update);
module.exports = matprakRoute;
