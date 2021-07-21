const express = require('express');
const router = express.Router();

//controllers
const UserController = require('./src/controllers/UserController');

// validators
const UserValidator = require('./src/validators/UserValidator');

//middlewares
const Auth = require('./src/middlewares/Auth');


//rota de testes
router.post('/ping',(req,res)=>{
    res.json({pong:true});
})
router.post('/user/signup',UserValidator.signup, UserController.signup);
router.post('/user/signin',UserValidator.signin, UserController.signin);
router.get('/user/info',Auth.private,UserController.info);
router.put('/user/editAction',UserValidator.editAction, Auth.private, UserController.editAction);


module.exports = router;
