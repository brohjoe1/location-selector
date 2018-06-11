const express = require('express'),
    app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname+'/locationSelector.html'));
});

app.listen(3000, ()=>
    console.log('Express server started at port 3000'))