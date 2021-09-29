import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import requestlogger from "./middleware/requestlogger.js";
import mongoose from 'mongoose';
import BikeReport from './models/bycicleReport.js'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(requestlogger);

// Database Settings:
const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const db = "abandonedBicycles";
const connectionString = `mongodb://${username}:${password}@localhost:27017/${db}`;

// Event handlers helpful for logging:
mongoose.connection.on('error',         (e) => console.log(">> Error!", e) || process.exit(0));
mongoose.connection.on('connecting',    () => console.log(">> Connecting"));
mongoose.connection.on('disconnecting', () => console.log(">> Disconnecting"));
mongoose.connection.on('disconnected',  () => console.log(">> Disconnected"));

app.get("/notifications", async (req, res) => {
  // Somehow load data from DB
  await mongoose.connect(connectionString);
  req = await BikeReport.find({});
  mongoose.connection.close()
  res.json(req);
});

app.post("/notifications", async (req, res) => {
  console.log("Received", req.body);
  // Somehow save data to DB
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(connectionString);
    const bicycle = new BikeReport({
      position: {
        lat: req.body.position.lat,
        lng: req.body.position.lng
    },
      description: req.body.description
    })
    console.log();
    bicycle.save()
        .then(() => {
          console.log(`Report at lat:${req.body.position.lat} lng:${req.body.position.lng} saved!!!`)
        })
        .catch(e => console.log("Unable to save!", e))
        .finally(() => mongoose.connection.close());
  } catch (e) { console.log("Error:", e) }
  res.status(201);
  res.json({ success: true });
});

app.use((req, res) => {
  res.status(404);
  res.send("I don't have what you seek");
});

const port = process.env.PORT || 5000;

app.listen(process.env.PORT, () => {
  console.info(`App listening on http://localhost:${port}`);
});
