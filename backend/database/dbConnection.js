import mongoose from "mongoose";

export const dbConnection=()=>{
  mongoose.connect(process.env.MONGO_URI,{
    dbName:"FOODDELIVERY"
}).then(()=>{
  console.log("Connected To database successfully");
}).catch(err=>{
  console.log(`Some error occured while Connected to database ${err}`);
});
};