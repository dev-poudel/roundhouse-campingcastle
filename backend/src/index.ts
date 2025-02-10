import cookieParser from "cookie-parser"
import express from "express"
const app = express()

const PORT = process.env.PORT || 5000
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParser())
app.use(express.static("public"))

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
    
})