const { validationResult, matchedData } = require('express-validator');
const bcrypt = require('bcryptjs');

// models
const User = require('../models/User');

module.exports = {
    signup: async (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json({error: errors.mapped(req)});
            return;
        }

        const data = matchedData(req);

        const email = await User.findOne({email:data.email});
        if(email){
            res.json({error:{email:{msg:'E-mail já cadastrado!'}}});
            return;
        }

        const cpf = await User.findOne({cpf:data.cpf});
        if(cpf){
            res.json({error:{cpf:{msg:'Cpf já cadastrado!'}}})
        }

        const password = await bcrypt.hash(data.password,10);
        const payload = (Date.now() + Math.random()).toString();
        const token = await bcrypt.hash(payload,10);

        const newUser = new User({
            name:data.name,
            cpf:data.cpf,
            email:data.email,
            password,
            token
        });

        await newUser.save();
        res.json({newUser});
    },

    signin: async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.json({error: errors.mapped(req)});
            return;
        };

        const data = matchedData(req);
        
        const user = await User.findOne({cpf:data.cpf});
        if(!user){
            res.json({error:'Cpf e/ou Senha invalidos!'});
            return;
        };

        const match = await bcrypt.compare(data.password, user.password);
        if(!match){
            res.json({error:'Cpf e/ou Senha invalidos!'});
            return;
        };

        res.json({data});
 
   
    },
    info:async (req, res)=>{

        let token = req.query.token;

        const user = await User.findOne({token});

        res.json({
            name:user.name,
            email:user.email,
            cpf:user.cpf,
        });
        
        
    },
    editAction: async (req,res)=>{
       const errors = validationResult(req);
       if(!errors.isEmpty()) {
           res.json({error:errors.mapped()});
           return;
       }

       const data = matchedData(req);

       let updates = {};

       if(data.name){
           updates.name = data.name;
       }

       if(data.email){
           const emailCheck = await User.findOne({email:data.email});
           if(emailCheck){
               res.json({error:'E-mail já cadastrado.'});
               return;
           }
           updates.email = data.email;
       };

       if(data.password){
           updates.password = await bcrypt.hash(data.password,10);
       };

       if(data.cpf){
           updates.cpf = data.cpf;
       }

       await User.findOneAndUpdate({token:data.token},{$set:updates});
       res.json({});
    },
    consult: async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.json({error:errors.mapped()});
            return;
        }
 
        const data = matchedData(req);

        const user = await User.findOne({cpf:data.cpf});
        if(user){
            res.json({error:'Cpf já cadastrado.'});
            return;
        };
    }
}