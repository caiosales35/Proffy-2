import express from "express";
import ClassesControler from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesControler = new ClassesControler();
const connectionsController = new ConnectionsController();

routes.get("/classes", classesControler.index);
routes.post("/classes", classesControler.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes;
