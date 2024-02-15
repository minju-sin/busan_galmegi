const asyncHandler = require("express-async-handler");


// Get all users
// GET /users

const getAllUsers = asyncHandler (async(req, res)=> {
    res.send("Users Page");
});

// Create user
// POST /users
const createUser = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        return res.send("필수 값이 입력되지 않았습니다.");
    }
    res.send("Create Users");
});

// Get id user
// Get /users/:id
const getIdUser = asyncHandler(async (req, res) => {
    res.send(`View User for ID: ${req.params.id}`);
});

// Put id user
// PUT /users:id
const putIdUser = asyncHandler(async (req, res) => {
    res.send(`Put User for ID: ${req.params.id}`);
});

// Delete id user
// DELETE /users:id
const deleteIdUser = asyncHandler(async (req, res) => {
    res.send(`Delete User for ID: ${req.params.id}`);
});

module.exports = {getAllUsers, createUser, getIdUser, putIdUser, deleteIdUser};