const express = require("express");
<<<<<<< HEAD
const { getUserProfile } = require("../controllers/userController");
=======
const { saveUserData, getUserProfile } = require("../controllers/userController");
>>>>>>> fc48cfdbdc4b757e267015bf96938dd87c3af47f
const router = express.Router();

// 회원 정보 
router
<<<<<<< HEAD
=======
.route("/")
    .post(saveUserData);

router
>>>>>>> fc48cfdbdc4b757e267015bf96938dd87c3af47f
.route("/:id")
    .get(getUserProfile)

module.exports = router;