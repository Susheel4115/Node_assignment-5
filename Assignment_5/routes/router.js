const router = require("express").Router();
const registerUser = require("../controller/registerUser");
const userLogin = require("../controller/userLogin");

//register the user

router.post("/register", registerUser);

//post for login user is legit or not

router.post("/login", userLogin);

module.exports = router;
