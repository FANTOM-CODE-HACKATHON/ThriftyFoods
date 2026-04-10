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

mongoose.connect("mongodb://localhost:27017/test")
.then(()=>console.log("Db connected"))
.catch(err => console.log("error",err));

const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        trim: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,     
        trim: true,
        lowercase: true    
    },
    Phone: {
        type: String,
        trim: true
    },
    Password: {
        type: String,
        required: true    
    },
    userType: {
        type: String,
    }
}, {
    timestamps: true   
});


UserSchema.index({ Email: 1 }, { unique: true });

const User = mongoose.model("User",UserSchema);

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

app.post("/submit",async (req,res) =>{
    const body = req.body;


   const result =  await User.create({
        Name: body.Name,
        Email: body.Email,
        Phone: body.Phone,
        Password: body.Password,
        userType: body.userType,
    });

    console.log("RESULT: " + result);
    res.json({ 
        status: "success", 
        message: "Data received successfully!",
    });
});

app.listen(PORT,()=>{
    console.log(`Server Started on ${PORT}`);
});


