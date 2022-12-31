import { Router } from "express";
const router = Router();

import products from "./productRouter.js";
import carts from "./cartRouter.js";
import orders from "./orderRouter.js";
import home from "./homeRouter.js";
import auth from "./authRouter.js";
import user from "./userRouter.js";
import info from "./infoRouter.js";
import error from "./errorRouter.js";

router.use("/products", products);
router.use("/carts", carts);
router.use("/orders", orders);
router.use("/", home);
router.use("/auth", auth);
router.use("/user", user);
router.use("/info", info);
router.use("*", error);

export {router};
