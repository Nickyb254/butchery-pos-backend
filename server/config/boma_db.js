import mongoose from "mongoose";
 
export default async function connectDB() {
  // const url = process.env.MONGO_URL;
  const url = process.env.MONGO_ATLAS_URL;
  if (!url) {
    console.error("MONGO_URI is not defined in .env file");
    process.exit(1);
  }

  try {
    await mongoose.connect(url, {
      
    });
    console.log(`Database connected: ${url}`);
  } catch (err) {
    console.error('Database connection error'+ err.message);
    process.exit(1);
  }
  
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database instance connected: ${url}`);
  });
 
  dbConnection.on("error", (err) => {
    console.error(`connection instance error: ${err}`);
  });
  return;
}