const express = require('express');
const { postgraphile } = require('postgraphile');
const jwt = require('jsonwebtoken');
const db = require('../models/index');
const bodyParser = require('body-parser');
// const private_key = require('../key/private.key');
const user = db.users;
let PORT = process.env.PORT || 4000;
let app = express();
app.use(bodyParser.json());
app.use(postgraphile("postgres://postgres:kamesh333@localhost:5432/company_tree","public",{
    graphiql: true,
    enhanceGraphiql: true,
}));
app.use('/next/postgraphi',postgraphile(
    "postgres://postgres:kamesh333@localhost:5432/company_tree","public",{
        externalUrlBase: "/next/postgraphi",
        graphqlRoute: "/graphql",
        graphiql: true,
        graphiqlRoute: "/graphiql",
}
));
app.use("/graphql", authMiddleware);
app.post('/login',(req,res)=>{
    let payload ={ 
        id:1,
        email:"moneykandan995@gmail.com",
        password:"manikandan"
    };
    let expiresIn = {
        expiresIn:'2h'
    };
    user.findAll({
        where: {
          email: req.body.email,
          password: req.body.password
        }
      }).then(result=>{
          if(result[0]){
              res.send(jwt.sign(payload,"private_key",expiresIn));
          }else{
              res.send("the authentication is wrong");
          }
      });
});
function authMiddleware(req, res, next) {
    if(typeof req.headers != undefined){
        var jwtHeader = req.headers['authorization'];
        var token = jwtHeader.split(" ");
        jwt.verify(token[1],"private_key",(err,result)=>{
            if(err){
                res.sendStatus(403);
            }else{
                next();
            }
        });
    }else{
        res.sendStatus(403);
    }
  }
// Mount middleware on the GraphQL endpoint
app.listen(PORT,()=>{
    console.log(`https://localhost:${PORT}`);
})