const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const mongoose = require("mongoose");
const cors = require('cors');
const bcrypt = require('bcrypt'); // For hashing passwords
const jwt = require('jsonwebtoken'); // For JWT

const app = express();
app.use(cors());
app.use(bodyParser.json());

// mongoose.connect("mongodb://127.0.0.1:27017/Signup", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
mongoose.connect("mongodb+srv://skandabhebbar:CQpZCe1HrcIWcMLH@cluster0.vcimiqn.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    phone: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

// Register endpoint
app.post('/Signup', async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
            
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, phone, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
let OTP = Math.floor(10000 + Math.random() * 90000);
app.post('/Forgotpassword',async(req,res)=>{
try{
    const {email}=req.body;
    const user = await User.findOne({ email });
        if (!user) {
           return res.status(400).json({ message: 'User not found' });
        }
        else{

            
            console.log(OTP);
            const transporter = nodemailer.createTransport({
                // Specify your email service provider's configuration here
                service: 'gmail',
                auth: {
                  user: 'skandabhebbar@gmail.com',
                  pass: 'krcs mils vsam lglj',
                },
              });
          
              const mailOptions = {
                from: 'skandahebbar@gmail.com',
                to: email,
                subject: 'RESET PASSWORD',
                text: `VERIFICASTION OTP:${OTP}`,
              };
          
              await transporter.sendMail(mailOptions);
              console.log('Email sent: OTP confirmation');

        return res.status(200).json({ message: 'User found' });

        }
}
catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
}

});
app.post('/VerifyOtp', async (req, res) => {
    console.log("Entered VerifyOtp endpoint");
    const { otp } = req.body;
    console.log("Received OTP:", otp);
    if (OTP == otp) {
        console.log("OTP Matched");
        return res.status(200).json({ message: 'User found' });
    } else {
        console.log("Invalid OTP");
        return res.status(401).json({ message: 'Invalid OTP' });
    }
});

app.post('/Resetpass',async(req,res)=>{
    try{console.log("entered resetpass");
        const { newPassword, confirmPassword, email } = req.body;
        const user = await User.findOne({ email });
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: 'New password and confirm password do not match' });
          }
          const hashedPassword = await bcrypt.hash(newPassword, 10);
          await User.updateOne({ email }, { password: hashedPassword });

          return res.status(200).json({ message: 'Password reset successful' });
          //here i want to change old passwor with new password

    }
    catch{

    }
});
// Login endpoint
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Verify hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            // Generate JWT
            const token = jwt.sign({ userId: user._id }, 'your_secret_key_here', { expiresIn: '1h' });
            return res.json({ message: 'Login successful', token });
        } else {
            return res.status(401).json({ message: 'user email not exist' });
        }

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, 'your_secret_key_here');
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};


// Example protected route
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Protected route', userId: req.userId });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
