import express from "express";
import lab_router from "./routers/lab_router.js"



//import routes
//-> localhost:8000/lab
const app = express();
const port = 8000;  


app.use("/lab", lab_router)

app.get("/", (req, res)=>{
    res.send("Welcome to the server")

})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

