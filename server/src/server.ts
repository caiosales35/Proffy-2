import express from "express";
import cors from "cors";
import expressJWT from "express-jwt";
import routes from "./routes";
import secret from "./utils/JWTSecret";

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  expressJWT({ secret, algorithms: ["HS256"] }).unless({
    path: ["/login", "/users", "/connections"],
  })
);
app.use(routes);

app.listen(3333);
