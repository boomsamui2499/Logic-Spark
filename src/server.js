const express = require('express');


const app = express();

app.use(express.json());



const routeUser = require('./routes/product');

app.use('/api/user', routeUser);



app.listen(5000, '127.0.0.1', () => console.log('Server running on port : 5000'));
