const express = require("express");
const router = express.Router(); 
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");


// to load signup page
router.get("/signup", userController.renderSignupForm);

// signup post route
router.post("/signup", wrapAsync(userController.signup));

// to load login page
router.get("/login", userController.renderLoginForm);

router.post("/login",
    saveRedirectUrl,
    passport.authenticate("local", { 
        failureRedirect: "/login", 
        failureFlash: true }), userController.login
);

router.get("/logout", userController.logout);



module.exports = router;