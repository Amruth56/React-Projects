import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
    const { email, password} = req.body;

    const exists = await User.findOne({email});
    if(exists){
        return res.status(400).json({message: "User already exists"});
    }

    const handlePassword = await bcrypt.hash(password, 10);
    const user = await User.create({email, password: handlePassword});

    return res.status(201).json({message: "User registered successfully"});
};


export const loginUser = async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({message: "Invalid credentials"});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({message: "Invalid credentials"});
    };

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"});

    return res.status(200).json({token});
}