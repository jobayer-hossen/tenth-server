const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 9000 ;

app.use(cors());

const data = require('./data/data.json')

app.get('/' , (req , res)=>{
    res.send('chiefs is coming')
});

app.get('/data', (req , res)=>{
    res.send(data);
});
app.get('/data/:id' , (req , res)=>{
    const id = req.params.id;
    const selectId = data.find(ch=>ch.id === id);
    res.send(selectId);
});


app.listen( port , ()=>{
    console.log(`Food API is running on port ${port}`);
});