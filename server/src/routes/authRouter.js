import { Router } from "express";
import { postLogin } from "../controllers/login.js";
import {getLogError} from "../controllers/logError.js";
import { postRegister } from "../controllers/register.js";
import { getLogout } from "../controllers/logout.js";

import upload from '../middleware/multer.js';

const auth = Router();

import passport from "../middleware/passport.js";

auth.post("/login", passport.authenticate("local", { failureRedirect: "/auth/login-error" }), postLogin);

auth.get("/login-error", getLogError);

auth.get("/logout", getLogout);

auth.post("/register", upload.single("myFile"), postRegister);

export default auth;