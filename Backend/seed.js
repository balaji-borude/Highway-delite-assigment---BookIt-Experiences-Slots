import mongoose from "mongoose";
import dotenv from "dotenv";
//import Experience from "./src/models/Experience";

dotenv.config();

// model 


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

// Create model
const Experience = mongoose.model("Experience", experienceSchema);

const experiences = [
  {
    title: "Kayaking",
    location: { city: "Udupi", state: "Karnataka" },
    description:
      "Curated small-group experience. Certified guide. Safety first with gear included.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    price: 999,
    tags: ["Certified guide", "Safety gear included"],
  },
  {
    title: "Nandi Hills Sunrise",
    location: { city: "Bangalore", state: "Karnataka" },
    description:
      "Curated small-group experience. Certified guide. Safety first with gear included.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    price: 899,
    tags: ["Group Experience", "Sunrise Trek"],
  },
  {
    title: "Coffee Trail",
    location: { city: "Coorg", state: "Karnataka" },
    description:
      "Curated small-group experience. Certified guide. Safety first with gear included.",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
    price: 1299,
    tags: ["Coffee Plantation", "Nature Walk"],
  },
  {
    title: "Kayaking",
    location: { city: "Udupi", state: "Karnataka" },
    description:
      "Curated small-group experience. Certified guide. Safety first with gear included.",
    image:
      "https://images.unsplash.com/photo-1761604297459-c2a4a0b18b0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1936",
    price: 999,
    tags: ["Adventure", "Water Sport"],
  },
  {
    title: "Nandi Hills Sunrise",
    location: { city: "Bangalore", state: "Karnataka" },
    description:
      "Curated small-group experience. Certified guide. Safety first with gear included.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80",
    price: 899,
    tags: ["Group Experience", "Sunrise Trek"],
  },
  {
    title: "Boat Cruise",
    location: { city: "Sundarban", state: "West Bengal" },
    description:
      "Curated small-group experience. Certified guide. Safety first with gear included.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    price: 999,
    tags: ["Boat Ride", "Group Tour"],
  },
  {
    title: "Bungee Jumping",
    location: { city: "Manali", state: "Himachal Pradesh" },
    description:
      "Curated small-group experience. Certified guide. Safety first with gear included.",
    image:
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=800&q=80",
    price: 999,
    tags: ["Adventure", "Thrill"],
  },
  {
    title: "Coffee Trail",
    location: { city: "Coorg", state: "Karnataka" },
    description:
      "Curated small-group experience. Certified guide. Safety first with gear included.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    price: 1299,
    tags: ["Coffee Plantation", "Nature Walk"],
  },
];

// Seed function
const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully!");

    await Experience.deleteMany();
    console.log("🧹 Existing experiences deleted.");

    await Experience.insertMany(experiences);
    console.log("✅ Data seeded successfully!");

    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

// Run seeder
seedData();
