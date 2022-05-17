const router = require("express").Router();
const registerUser = require("../controller/registerUser");
const userLogin = require("../controller/userLogin");
const getAllUsers = require("../controller/getAllUsers");
const deleteUser = require("../controller/deleteUser");
const authMiddleware = require("../middleware/auth");
const editUser = require("../controller/editUser");
const createUser = require("../controller/createuser");
//register the user

router.post("/register", registerUser);

//post for login user is legit or not

router.post("/login", userLogin);

//get all user
router.get("/getAll", getAllUsers);

//getting post

router
  .route("/posts")
  .get(authMiddleware, getAllUsers)
  .post(authMiddleware, createUser);

//delete user
router
  .route("/posts/:id")
  .put(authMiddleware, editUser)
  .delete(authMiddleware, deleteUser);

module.exports = router;
