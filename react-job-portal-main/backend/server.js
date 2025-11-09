// ✅ Load environment variables first
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

// Now import everything else
import app from "./app.js";
import cloudinary from "cloudinary";
import dbConnection from "./database/dbConnection.js";

console.log("✅ JWT_SECRET =", process.env.JWT_SECRET); // should print value
dbConnection();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
