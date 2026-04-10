import express from "express"
import mongoose from "mongoose";
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

const PORT = 3000;


app.get("/",(req,res)=>{
    res.render("index",{title:"home"});
});

app.get("/register",async (req,res)=>{
    res.render("RegistrationPage",{title:"Register"});
});

app.get("/login",async (req,res)=>{
    //Render Login Page
});

app.listen(PORT,()=>{
    console.log(`Server Started on ${PORT}`);
});


