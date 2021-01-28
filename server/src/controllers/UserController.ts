import { Request, Response } from "express";
import db from "../database/connection";
import bcrypt from "bcrypt";

export default class UserController {
  async create(request: Request, response: Response) {
    const { name, email, password, avatar, bio, whatsapp } = request.body;
    try {
      bcrypt.hash(password, 10, async function (err: any, hash: string) {
        await db("users").insert({
          name,
          email,
          password: hash,
          avatar,
          bio,
          whatsapp,
        });
      });
      return response.status(201).send();
    } catch (err) {
      return response
        .status(400)
        .json({ error: "Unexpected error while creating new user..." });
    }
  }
}
