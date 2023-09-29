require("dotenv").config();
const connectDB = require("./db/connect");
const jsonFile = require("./MOCK_DATA.json");

const Job = require("./models/Job");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Job.create(jsonFile);
    console.log("Success!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

start();

