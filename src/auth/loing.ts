import { Request, Response } from "express";

const login = async (req: Request, res: Response) => {
  res.send("Login successful!");
};

export default login;
