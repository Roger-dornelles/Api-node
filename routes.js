const express = require('express');
const router = express.Router();

//controllers
const UserController = require('./src/controllers/UserController');

// validators
const UserValidator = require('./src/validators/UserValidator');

//middlewares
const Auth = require('./src/middlewares/Auth');


//rota de teste
router.get('/ping',(req,res)=>{
    res.json('ola mundo');
});
// rotas da API
router.post('/user/signup',UserValidator.signup, UserController.signup);
router.post('/user/signin',UserValidator.signin, UserController.signin);
router.get('/user/info',Auth.private,UserController.info);
router.put('/user/editAction',UserValidator.editAction, Auth.private, UserController.editAction);
router.post('/consult',UserValidator.consult,UserController.consult);


module.exports = router;