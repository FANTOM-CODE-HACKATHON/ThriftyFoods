import express from "express"
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test DB Connection
async function testDB() {
    try {
        const connection = await pool.getConnection();
        console.log('Successfully connected to MySQL Database');
        connection.release();
    } catch (err) {
        console.error('Database connection failed:', err.message);
    }
}

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

app.post('/submit', async (req, res) => {
    const { Name, Email, Phone, Password, userType } = req.body;

    if (!Name || !Email || !Phone || !Password || !userType) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    if (Password.length < 6) {
        return res.status(400).json({ success: false, message: "Password must be at least 6 characters long" });
    }

    try {
        // Check if email already exists
        const [existing] = await pool.query('SELECT email FROM users WHERE email = ?', [Email]);
        if (existing.length > 0) {
            return res.status(409).json({ success: false, message: "Email already registered" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Password, salt);

        // Insert user
        const sql = `
            INSERT INTO users (full_name, email, phone, password, user_type)
            VALUES (?, ?, ?, ?, ?)
        `;

        await pool.query(sql, [Name, Email, Phone, hashedPassword, userType]);

        res.status(201).json({
            success: true,
            message: `Registration Successful! Welcome to Thrifty Foods, ${Name}!`
        });

    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ success: false, message: "Server error. Please try again later." });
    }
});

app.listen(PORT,()=>{
    console.log(`Server Started on ${PORT}`);
});


