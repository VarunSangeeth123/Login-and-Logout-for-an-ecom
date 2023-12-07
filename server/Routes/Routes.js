const express = require("express");
const {SignUp,getAll, login, userVerification, getUser,refreshToken, logout} = require("../controller/control");
const router = express.Router();


router.post("/",SignUp);
router.post("/getall",getAll);
router.post('/login',login)
router.get("/verify",userVerification,getUser)
router.get('/refresh',refreshToken,userVerification,getUser)
router.post('/logout',userVerification,logout)


module.exports = router;
