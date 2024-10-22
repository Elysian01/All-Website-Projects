const express = require('express')
var cors = require('cors')
 
const port = 9000
const app = express()
const productsData = require('./productsData.js');
// const products = productsData

app.use(cors());
app.get('/', (req, res) => {
  console.log("/ invoked");
  res.send('Hello, Send get request on /product route get products info')
})

app.get('/products', (req,res) => {
  console.log("/products invoked");
  res.send(JSON.stringify(productsData));
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}\nSend get request on /product route get products info`)
})