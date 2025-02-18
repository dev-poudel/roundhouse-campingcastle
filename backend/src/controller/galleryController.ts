import { db } from "../drizzle/db";
import { asyncHandler } from "../middleware/asyncHandler";
import {Request,Response} from "express"
import { GalleryTable } from "../drizzle/schema/gallery";
import { eq } from "drizzle-orm";

//create Gallery
export const createGallery = asyncHandler(async(req:Request,res:Response)=>{
try {
    const {image,viewType} = req.body;
    if ( !image ) {
          return res.status(400).json({ error: "Please fill all the fields" });
        }
    
        const [gallery] = await db.insert(GalleryTable).values({
          image,
          viewType
    
        }).returning();
    
        res.status(201).json(gallery);
    
} catch (error) {
    console.log(error);
    res.status(500).json({error:"Internal server error"})
    
}
})

//allGallery

export const getAllGallery = asyncHandler(async(req:Request,res:Response)=>{
    try {
        const allGaleery = await db.select().from(GalleryTable)
        res.status(200).json(allGaleery)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal server error"})
        
    }
})

//get single gallery

export const getGalleryById = asyncHandler(async(req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const gallery = await db.select().from(GalleryTable).where(eq(GalleryTable.id, Number(id))).limit(1);
        
            if (gallery.length === 0) {
              return res.status(404).json({ error: "Gallery not found" });
            }
        
            res.status(200).json(gallery[0]);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
        
    }
})

//update Gallery

export const updateGallery = asyncHandler(async(req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const {image} = req.body;
         const [updatedGallery] = await db.update(GalleryTable)
              .set({
                image,
                
              })
              .where(eq(GalleryTable.id, Number(id)))
              .returning();
        
            if (!updatedGallery) {
              return res.status(404).json({ error: "Gallery not found" });
            }
        
            res.status(200).json(updatedGallery);
        
    } catch (error) {
        console.log(error);
        res.json(500).json({message: "Internal server error"})
        
    }
})

//delete gallery

export const deleteGallery = asyncHandler(async(req:Request,res:Response)=>{
    try {
        const {id} = req.params;
            const deletedGallery = await db.delete(GalleryTable).where(eq(GalleryTable.id, Number(id))).returning();
        
            if (deletedGallery.length === 0) {
              return res.status(404).json({ error: "Galley not found" });
            }
        
            res.status(200).json({ message: "Gallery deleted successfully" });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"})
        
    }
})