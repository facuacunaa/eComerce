import {Router} from "express";
import Courses from "../dao/dbManagers/courses.js";

const courseManager=new Courses();

const router= Router();

router.get('/courses',async(req,res)=>{
    let courses = await courseManager.getAll();
    console.log(courses);
    res.render('courses',{courses});
});

export default router;
