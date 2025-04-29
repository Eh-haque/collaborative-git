import { Request, Response } from "express";

const login = async (req: Request, res: Response) => {
  res.send("register successful!");
};

export default login;
