const express = require("express");
const router = express.Router();
const passport = require("passport");
const HomeController = require("../controller/home_controller");
const SigninController = require("../controller/signin_controller");
const SignupController = require("../controller/signup_controller");
const ProfileController = require("../controller/user_controller");
const UserController = require("../controller/user_controller");
const WallPostsController = require("../controller/wallposts_controller");
router.get("/" , HomeController.home);
router.get("/user/profile", passport.checkAuthentication, ProfileController.view);
router.get("/signin", SigninController.view);
router.get("/signup" , SignupController.view);
router.post("/signup" , SignupController.signup);
router.get("/signout", UserController.endSession);
router.get("/user/wall",WallPostsController.view);
//use passport authenticate
router.post("/signin", passport.authenticate(
    'local',
    {failureRedirect: "/signin"},
), SigninController.createSession);
module.exports = router;