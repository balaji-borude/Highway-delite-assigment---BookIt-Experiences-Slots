// models/Experience.js
import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      city: { type: String, required: true },
      state: { type: String, required: true },
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String, 
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    tags: {
      type: [String], 
      default: [],
    },
    availableSlots: {
      type: Number,
      default: 10, 
    },
  },
  { timestamps: true }
);

export default mongoose.model("Experience", experienceSchema);
