const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    
    // check if a admin with that username already exists
    Admin.findOne({
        username: username,
    })
        .then((value) => {
            if(value) {
                res.status(403).json({
                    msg: 'user with this username already exists'
                })
            }
            // actual creation of new user
            else {
                Admin.create({
                    username: username,
                    password: password
                })
                .then(() => {
                    res.json({
                        msg: "Admin created successfully"
                    })
                })
                .catch(() => {
                    res.json({
                        msg: "user not created"
                    })
                })
            }
        })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    //ideally should also use zod for input validation

    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    })
    
    console.log(newCourse);
    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
    
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});
    
    res.json({
        courses: allCourses
    })
});

module.exports = router;