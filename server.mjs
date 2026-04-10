import express from "express"
const app = express();

app.set("view engine","ejs");
app.set("/view","view");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

const PORT = 3000;

app.get("/",(req,res)=>{
    
    
});

app.listen(PORT,()=>{
    console.log(`Server Started on ${PORT}`);
});


