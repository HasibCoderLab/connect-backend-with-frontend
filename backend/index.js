import express from "express"
import cors from "cors"


const app  = express();
app.use(cors())
const port  = 8000;

app.get("/",(req,res) =>{
    res.json({name:"Hasib" , age : 18});
})

app.listen(port , () => {
    console.log(`Sarver is started at ${port}`);
    
})