import { Request, Response } from "express";
import db from "../database/connection";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import secret from "../utils/JWTSecret";

export default class AuthController {
  async signIn(request: Request, response: Response) {
    const { email, password } = request.body;

    const user = await db("users").where("email", "=", email).first();

    if (user) {
      bcrypt.compare(
        password,
        user.password,
        function (err: Error, result: boolean) {
          if (err || !result)
            return response.status(401).send("User authentication failed!");
          response.json(
            jwt.sign({ user_id: user.id, email, name: user.name }, secret)
          );
        }
      );
    } else {
      response.status(400).send("Email not found!");
    }
  }
}
