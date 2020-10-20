import express, { response } from "express";
import { helloWorld } from "./routes";

const app = express();

app.get("/", (request, response) => {
  return response.json({message:"Hello World"});
});

app.get("/helloWorld", helloWorld);

app.listen(19001);