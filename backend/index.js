import express from "express"
import cors from "cors"


const app  = express();
app.use(express.json())
app.use(cors({
    "origin": "http://localhost:5173"
}))
const port  = 8000;

app.get("/",(req,res) =>{
    res.json({name:"Hasib" , age : 18});
});

app.post("/",(req,res) =>{
    console.log(req.body);
    
    res.send({success:true});
});

app.listen(port , () => {
    console.log(`Sarver is started at ${port}`);
    
})