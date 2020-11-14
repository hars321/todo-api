const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const { json } = require('body-parser');
const cors=require('cors');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors(),(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
//body parser middleware
app.use(urlencodedParser);
app.use(jsonParser);



//array to store data
var arr=[];

//route to store data in the array
app.post('/items',(req,res)=>{        
    arr=req.body;
    res.status(200).json("inserted");
})

//route to retrieve data from array
app.get('/items',(req,res)=>{
    res.json(arr);
})

//api routes index
app.get('/',(req,res)=>{
    res.send("routes:\nget: /items (gets the data stored in the array) \npost: /items (stores data in the array)");
})
app.listen('4000',()=>{
    console.log('listening on 4000');
})