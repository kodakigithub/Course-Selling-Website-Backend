// Middleware for handling auth
const { Admin } = require("../db/index");

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    Admin.findOne({
        username: username,
        password: password
    })
        .then( (value) => {
            if(value) {
                next();
            }
            else{
                res.status(403).json({
                    msg: "invalid username or password"
                })
            }
        })
}

module.exports = adminMiddleware;