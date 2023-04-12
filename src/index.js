const express = require('express');
const morgan = require('morgan');
const route = require('./routes');
const db = require('./config/db')

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Connect to DB
db.connect();

// Route
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
