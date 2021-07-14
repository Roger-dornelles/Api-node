# Api-node  ( EM DESENVOLVIMENTO :-) );

API HOSPEDADA NA VERCEL.

LINK: https://api-node-black.vercel.app/

ROTAS: 

rotas usadas par fazer as requisições:
router.post('/user/signup',UserValidator.signup, UserController.signup);
router.post('/user/signin',UserValidator.signin, UserController.signin);
router.get('/user/info',Auth.private,UserController.info);
router.put('/user/editAction',UserValidator.editAction, Auth.private, UserController.editAction);

Criação da Api em Node.js

Tecnologias usadas na criação da api: node.js, Mongoose, Express e banco de dados MongoDB.

CADASTRO:
criado um Schema para validação dos dados digitados pelo usuario, após a validação é feito a inserção dos dados no banco de dados.


LOGIN:
os dados digitados pelo usuario são verificados no banco de dados e após a verificação é feito o login.


INFORMAÇÔES DO USUARIO:
para verificação dos dados do usuario é visualisada atraves de um token.


ALTERAÇÂO DOS DADOS DO USUARIO:
a alteração dos dados do usuario é atraves de um token e a alterção dos dados são todos opcionais.
