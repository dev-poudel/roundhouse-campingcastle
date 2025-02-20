import { UserTable } from "../drizzle/schema";
import { db } from "../drizzle/db";
import { asyncHandler } from "../middleware/asyncHandler";
import {Request,Response} from "express"
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt"
import generateToken from "../utils/createToken";
import { LoginSchema, RegisterSchema } from "../validation/validation";

export const register = asyncHandler(async (req: Request, res: Response) => {
    try {
        RegisterSchema.parse(req.body)
    const {name,email,password} = req.body
  
      // Check if user with the same email already exists
      const [existingUser] = await db
        .select()
        .from(UserTable)
        .where(eq(UserTable.email, email)); 
  
      if (existingUser) {
        return res.status(400).json({ message: "User with this email already exists" });
      }
  
      // Hash password
      const salt = await bcrypt.genSalt(10);
     const hashedpassword = await bcrypt.hash(password, salt);
  
      // Insert new user
      const [newUser] = await db.insert(UserTable).values({name,email,password:hashedpassword}).returning();
  
      // Remove password from response
      // @ts-ignore
      delete newUser.password;
  
      // Generate token
      const token = generateToken(res, newUser.id);
  
      res.status(201).json({ user: newUser, token });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  export const login = asyncHandler(async(req:Request,res:Response)=>{
    try {
        LoginSchema.parse(req.body)
        const {email,password} = req.body;
        const [admin] = await db
        .select()
        .from(UserTable)
        .where(eq(UserTable.email, email)); // <-- Fixed to check email field
  

        if (admin) {
            const isPasswordMatch = await bcrypt.compare(password,admin.password)
            if (isPasswordMatch) {
                generateToken(res,admin.id)
                res.status(200).json({
                    success:true,
                    admin,
                    token: generateToken(res, admin.id)
                })
            }else{
                res.status(400).json({success:false, message : "Invalid admin email or password"})
            }
        }else{
            res.status(401).json({success:false,message : "Admin not found"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
  })


  export const logout = asyncHandler(async(req:Request,res:Response)=>{
    try {
        res.cookie("jwt", " ", {
            httpOnly:true,
            sameSite:"strict",
            maxAge:30*24*60*60*1000 //30days
        })
        res.status(200).json({message : "Admin logout successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
  })



