import auth from '../middleware/auth.js';
import { Router } from "express";
import { getHome, getConfig } from "../controllers/home.js";

const home = Router();

home.get("/", auth, getHome); 
home.get("/api/config", auth, getConfig); 

export default home;