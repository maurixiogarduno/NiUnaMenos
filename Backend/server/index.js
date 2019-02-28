const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3002);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:8100'}));

// Routes
app.use('/openbanking',require('./routes/atms.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});