import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message: "No taken provided"});
    }

    const token = authHeader.split(" ")[1];

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        res.userID = decode.id;
        next();
    } catch(err){
        return res.status(401).json({message: "Invalid token"});
    }
}