import { asyncHandler } from "../middleware/asyncHandler";
import {Request,Response} from "express"
export const register = asyncHandler(async(req:Request,res:Response)=>{
    try {
        const {name,email,password} = req.body;
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }

})