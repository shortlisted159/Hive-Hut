import express from "express";
import { deleteUser, followUser, getUser, UnfollowUser, updateUser, getAllUsers } from "../Controllers/UserController.js";
// import authMiddleware from "../MiddleWare/authMiddleWare.js";

const router = express.Router();

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', UnfollowUser)

export default router;
