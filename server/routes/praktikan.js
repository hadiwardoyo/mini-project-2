const praktikanRoute = require("express").Router();
const { PraktikanController } = require("../controllers");
const { verifyToken } = require('../middleware/authentication')

praktikanRoute.get("/data", verifyToken, PraktikanController.getPraktikan);

praktikanRoute.get('/details', verifyToken, PraktikanController.getById)

praktikanRoute.post('/login', PraktikanController.login)

praktikanRoute.post("/add", PraktikanController.add);

praktikanRoute.delete("/delete/:id", verifyToken, PraktikanController.delete);

praktikanRoute.put("/update/:id", verifyToken, PraktikanController.update);

praktikanRoute.get("/:id/matkul", verifyToken, PraktikanController.viewMatkul);

module.exports = praktikanRoute;
