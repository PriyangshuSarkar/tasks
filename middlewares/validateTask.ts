import type { Request, Response, NextFunction } from "express";

export const validateTask = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description } = req.body;
  if (!title || !description) {
    res.status(400).json({ error: "Title and description are required" });
  }
  next();
};
