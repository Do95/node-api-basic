const express = require('express');
const cors = require('cors');
const routerApi = require('./routes')
const { logHandler, boomHandler} = require('./middlewares/error.handler')
// const boom = require('@hapi/boom');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// const whilelist = [' http://localhost:3000'];
// const options = {
//   origin:(origin,callback) =>{
//     console.log(origin)
//     if(whilelist.includes(origin)){
//       callback(null,true);
//     }else{
//       callback(boom.notAcceptable('no permitido'))
//     }
//   }
// }
// app.use(cors(options));
routerApi(app);

app.use(boomHandler)
app.use(logHandler)

app.listen(port,() => {
  console.log("corriendo")
})