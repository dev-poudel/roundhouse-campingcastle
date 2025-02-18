import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"
const app = express()

const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static("public"))
app.use(cors({
    origin : "*"
}))
import adminRoute from "./routes/adminRoute"
import roomRoute from "./routes/roomRoute"
import ratingRoute from "./routes/ratingRoute"
import bookingRoute from "./routes/bookingRoute"
import uploadRoutes from "./routes/uploadRoute"
import galleryRoute from "./routes/galleryRoute"
import path from "path"

app.use("/api/admin", adminRoute)
app.use("/api/room",roomRoute)
app.use("/api/rating",ratingRoute)
app.use("/api/booking",bookingRoute)
app.use("/api/gallery", galleryRoute)
app.use("/api/upload", uploadRoutes);
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
    
})