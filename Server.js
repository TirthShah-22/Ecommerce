require('dotenv').config()
const express=require('express')
const product=require('./src/Routes/ProductRoute')
var app = express();
const connectdb=require('./database')
app.use(express.json());

app.use('/api/v1',product);
app.listen(process.env.PORT,()=>{
console.log('listen on ',process.env.PORT)
})
connectdb()