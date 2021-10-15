const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { sequelize } = require('./models');


const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

sequelize.sync({ force: false })
    .then(() => {
        console.log('Connected to database');
    }).catch((err) => {
        console.error(err);
    });


const recordRouter = require('./router/record');
app.use('/records', recordRouter);

const contentRouter = require('./router/content');
app.use('/contents', contentRouter);

app.listen(3001, () => {
    console.log("express server on port 3001");
});

