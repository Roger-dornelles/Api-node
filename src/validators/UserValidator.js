const { checkSchema } = require('express-validator');


module.exports = {
    signup: checkSchema({
        name:{
            trim:true,
            notEmpty:true,
            isLength:{
                options:{min:2}
            },
            errorMessage:'Nome precisa ter no minimo 2 caracteres.'
        },
        cpf:{
            notEmpty:true,
            isLength:{
                options:{min:11}
            },
            errorMessage:'Cpf incorreto!'
        },
        email:{
            isEmail:true,
            normalizeEmail:true,
            errorMessage:'E-mail invalido!'
        },
        password:{
            trim:true,
            isLength:{
                options:{min:6}
            },
            errorMessage:'Senha precisa ter pelo menos 6 caracteres!'
        }
    }),
    signin: checkSchema({
        cpf:{
            notEmpty:true,
            isLength:{
                options:{min:11}
            },
            errorMessage:'Cpf invalido!'
        },
        password:{
            trim:true,
            isLength:{
                options:{min:6}
            },
            errorMessage:'Senha invalida!'
        },
        token:{
            notEmpty:false
        }
    }),
    editAction: checkSchema({
        name:{
            optional:true,
            trim:true,
            isLength:{
                options:{min:2}
            },
            errorMessage:'Nome precisa ter no minimo 2 caracteres'

        },
        cpf:{
            optional:true,
            isLength:{
                options:{min:11}
            },
            errorMessage:'Cpf invalido'
        },
        email:{
            optional:true,
            isEmail:true,
            normalizeEmail:true,
            errorMessage:'E-mail invalido.'
        },
        password:{
            optional:true,
            isLength:{
                options:{min:6}
            },
            errorMessage:'Senha precisa ter no minimo 6 caracteres.'
        },
        token:{
            notEmpty:true
        }
    }),
    consult:checkSchema({
        cpf:{
            optional:true,
            isLength:{
                options:{min:11}
            },
            errorMessage:'Cpf invalido'
        },
        email:{
            optional:true,
            isEmail:true,
            normalizeEmail:true,
            errorMessage:'E-mail invalido.'
        }
       
    })
}
