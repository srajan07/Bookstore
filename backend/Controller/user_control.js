import User from '../model/user.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email Already exists" });
        }
        const hashpassword = await bcryptjs.hash(password, 7); // Await the hashing
        const createdUser = new User({
            username: username,
            email: email,
            password: hashpassword // Assign the hashed password
        });
        await createdUser.save();
        res.status(201).json({ message: "User created Successfully" });
    } catch (error) {
        console.log("error", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const login =async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user= await User.findOne({email})
        const ismatch= await bcryptjs.compare(password,user.password)
        if(!user || !password){
            return res.status(400).json({message:"user not found"})
        }
        else{
            res.status(201).json({message:"login Successfully",user:{
                _id:user._id,
                username:user.username,
                email:user.email
            }}) 
        }
    }
    catch(error){
        console.log("error",error.message)
        res.status(500).json({message:"Internal server error"})
    }
}