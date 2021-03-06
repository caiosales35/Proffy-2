import express from "express";
import AuthController from "./controllers/AuthController";
import ClassesControler from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";
import UserController from "./controllers/UserController";

const routes = express.Router();
const classesControler = new ClassesControler();
const connectionsController = new ConnectionsController();
const userController = new UserController();
const authController = new AuthController();

routes.post("/login", authController.signIn);

routes.post("/users", userController.create);

routes.get("/classes", classesControler.index);
routes.post("/classes", classesControler.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes;
