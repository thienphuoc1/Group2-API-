import express from "express";
import { CreateSubject, ListSubject, GetSubject, UpdateSubject, DeleteSubject } from "../controllers/Subject.js";
const router = express.Router();
//Tao moi
router.post("/subjects", CreateSubject);

//Lay tat ca 
router.get("/subjects", ListSubject);

//Lay theo id
router.get("/subjects/:subjectID", GetSubject);

//Cap nhat
router.patch("/subjects/:subjectID",UpdateSubject);

//Xoa
router.delete("/subjects/:subjectID",DeleteSubject);

export default router;
