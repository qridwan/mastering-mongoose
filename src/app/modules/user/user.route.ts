import express from "express";
import { createUser, findUser, getAdmins, getUsers } from "./user.controller";

const router = express.Router();

router.get("/", getUsers);
router.get("/admins", getAdmins);
router.get("/:id", findUser);
router.post("/create-user", createUser);

export default router;
