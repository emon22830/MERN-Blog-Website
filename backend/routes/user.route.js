import express from "express"
import { register } from "../controllers/user.controller.js"
import e from "express"

const router = express.Router()

router.route("/register").post(register)

export default router;
