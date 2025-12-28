import dotenv from "dotenv";
import connectBD from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path:'./env'
})

connectBD()
.then(()=>{
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server started at port : ${process.env.PORT}`);
  })
})
.catch((err) => {
  console.log("MongoBD connection failed", err)
})