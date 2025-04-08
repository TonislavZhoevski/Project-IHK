require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const {fetchAndLogDataSources } = require('./src/services/dataService');
const webhookRoute = require('./src/routes/webhookRoutes');

const app = express();

// Setup EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); // For parsing JSON bodies
app.use('./api', webhookRoute);

// Main route for testing
app.get('/', (req, res) => {
    res.send('The server works');
});

// The port is from .env or 3000 by default
const PORT = process.env.PORT || 3000;

fetchAndLogDataSources();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});