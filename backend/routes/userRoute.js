const express = require("express");
const {getAllUsers, createUser, getIdUser, putIdUser, deleteIdUser} = require("../controllers/userController");
const router = express.Router();

// 연락처 가져오기 
router
.route("/")
    .get(getAllUsers)
    .post(createUser);

router
.route("/:id")
    .get(getIdUser)
    .put(putIdUser)
    .delete(deleteIdUser);

    module.exports = router;