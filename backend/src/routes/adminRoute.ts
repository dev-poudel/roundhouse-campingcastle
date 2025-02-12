import express,{Router} from "express"
import { login, logout, register } from "../controller/adminController"
import { isAdmin, isAuthenticate } from "../middleware/authMiddleware"
const router:Router = express.Router()
router.route("/").post(register)
router.route("/login").post(login)
router.route("/logout").post(isAuthenticate,logout)
export default router