import express from "express"
import mongod from "mongod"
const app = express();

app.set("view engine","ejs");
app.set("views","views");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

const PORT = 3000;


app.get("/",(req,res)=>{

    res.render("index",{data:"Hello"});
    
});

app.get("/register",async (req,res)={

});

app.listen(PORT,()=>{
    console.log(`Server Started on ${PORT}`);
});


