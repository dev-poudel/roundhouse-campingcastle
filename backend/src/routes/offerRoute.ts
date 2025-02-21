import express, { Router } from "express";
import { createOffer, getAllOffers, getOfferById, updateOffer, deleteOffer } from "../controller/offerController";

const router: Router = express.Router();

// Routes
router.route("/").post(createOffer); // Create Offer
router.route("/").get(getAllOffers); // Get All Offers
router.route("/:id").get(getOfferById); // Get Single Offer
router.route("/:id").put(updateOffer); // Update Offer
router.route("/:id").delete(deleteOffer); // Delete Offer

export default router;