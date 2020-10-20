import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "a@b.c",
    password: "1234",
    techs: ["Node", "React", { title: "Javascript", experience: 100 }],
  });

  return response.json({ message: "Hello World" });
}
