import mongoose from "mongoose";    

mongoose.set("returnOriginal", false)

mongoose.connect("mongodb://localhost:27017/AlanMovieDB").catch((err) => {
    console.error(err);
console.log("Error connecting to database", err)
})
mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB!");
  });
  
  mongoose.connection.on("error", (err) => {
    console.log(`MongoDB connection error: ${err}`);
  });

  export default mongoose
  