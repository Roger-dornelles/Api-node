# Api-node  ( EM DESENVOLVIMENTO :-) );

API HOSPEDADA NA VERCEL.

LINK: https://api-node-black.vercel.app/

PARA TESTE DA API FOI USADO O Rest test test.

LINK:

https://resttesttest.com/

ROTAS: 

rotas usadas par fazer as requisições:

router.post('/user/signup');  //cadastro de usuario

router.post('/user/signin');  // login do usuario

router.get('/user/info');   // buscar informações do usuario

router.put('/user/editAction');  // editar informações do usuario



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


OBS:

Api criada para ser usada como back-end do clone do app nubank.
Ainda não foi implementado esta api junto ao projeto APP-NUBANK.
