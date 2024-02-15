const express = require("express");
const {getAllUsers, createUser, getIdUser, putIdUser, deleteIdUser, findUser} = require("../controllers/userController");
const router = express.Router();

// 사용자 가져오기
router
.route("/")
    .get(getAllUsers)
    .post(createUser);

router
.route("/login")
    .post(findUser);

router
.route("/:id")
    .get(getIdUser)
    .put(putIdUser)
    .delete(deleteIdUser);

    module.exports = router;