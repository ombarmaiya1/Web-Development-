import express from 'express'
import { LoginUser, Logout, RegisterUser } from '../controllers/auth.controller';

const AuthRouter = express.Router();

AuthRouter.post("/login",LoginUser)
AuthRouter.post("/register",RegisterUser)
AuthRouter.get("/logout",Logout)

export default AuthRouter;