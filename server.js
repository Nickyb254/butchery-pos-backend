import express from "express";
import connectDB from'./config/boma_db.js'
 
const app = express();
const PORT = process.env.MONGO_URI || 3000;
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
connectDB();
app.get("/", (request, response) => {
  response.send({ message: "Hello from an Express API!" });
});
 
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});