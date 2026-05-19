import express from "express";
import { AuthController } from "./auth.controller";

const router = express.Router();

router.post("/login", AuthController.login);
router.get('/logout', AuthController.logout);
router.get('/refresh-token', AuthController.generateAccessTokenUsingRefreshToken);

export const AuthRoutes = router;