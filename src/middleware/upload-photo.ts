import { NextFunction, Request, Response } from "express";
import cloudinary from "../config/cloudinary";

export const uploadPhoto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.file) {
      const fileBase64 = req.file?.buffer.toString("base64");
      const file = `data:${req.file?.mimetype};base64,${fileBase64}`;

      const result = await cloudinary.uploader.upload(file);
      req.body.photoUrl = result.secure_url;
    }
    next();
  } catch (err: any) {
    console.log(err);
    return res.status(400).json({ message: "Fail to upload photo" });
  }
};
