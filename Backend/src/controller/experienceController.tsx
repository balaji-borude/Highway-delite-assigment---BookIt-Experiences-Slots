import Experience from "../models/Experience";
import { Request, Response } from "express";

export const getAllExperiences = async (req: Request, res: Response) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json({ 
        success: true, 
        data: experiences 
    });

  } catch (error) {
    res.status(500).json({ 
        success: false, 
        message: error 
    });
  }
};
