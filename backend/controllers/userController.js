const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Get all users
// GET /users
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.send(users);
});

// Create user
// POST /users
const createUser = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { userId, password, name, nickname, email } = req.body;
    if (!userId || !password || !name || !nickname || !email) {
        return res.send("필수 값이 입력되지 않았습니다.");
    }

    const newUser = await User.create({
        userId,
        password,
        name,
        nickname,
        email,
    });
    res.send("Create Users");
});

// Post login user
const findUser = asyncHandler(async (req, res) => {
    console.log(req.body);

    // 실제 로그인 처리 코드 작성
    // 여기서는 간단히 로그인 성공 여부를 응답으로 보내는 예시를 작성합니다.
    const { userId, password } = req.body;
    if (userId === 'user' && password === 'password') {
        res.status(200).json({ success: true, message: '로그인 성공' });
    } else {
        res.status(401).json({ success: false, message: '로그인 실패' });
    }
})

// Get id user
// Get /users/:id
const getIdUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    res.send(`View User for ID: ${req.params.id}`);
});

// Put id user
// PUT /users:id
const putIdUser = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const {userId, password, name, nickname, email} = req.body;
    const user = await User.findById(id);
    if(!user){
        throw new Error('User not found.');
    }

    user.userId = userId;
    user.password = password;
    user.name = name;
    user.nickname = nickname;
    user.email = email;

    user.save();
    res.json(user);
});

// Delete id user
// DELETE /users:id
const deleteIdUser = asyncHandler(async (req, res) => {

    const id = req.params.id;
    const user = await User.findById(id);
    if(!user){
        throw new Error('User not found.');
    }

    await User.deleteOne();
    res.send(`Deleted`);
});

module.exports = { getAllUsers, createUser, getIdUser, putIdUser, deleteIdUser, findUser};
