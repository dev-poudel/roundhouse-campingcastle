import express, { Router } from "express"
import { createGallery, deleteGallery, getAllGallery, getGalleryById, updateGallery } from "../controller/galleryController"
import { isAdmin, isAuthenticate } from "../middleware/authMiddleware";

const router:Router = express.Router()
router.route("/").post(isAuthenticate,isAdmin,createGallery) // Create Gallery
router.route("/").get(getAllGallery); // Get All Gallery
router.route("/:id").get(getGalleryById); // Get Single Gallery
router.route("/:id").put(isAuthenticate,isAdmin,updateGallery) // Update Gallery
router.route("/:id").delete(isAuthenticate,isAdmin,deleteGallery); // Delete Gallery



export default router