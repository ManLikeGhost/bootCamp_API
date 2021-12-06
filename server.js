// Bring in Express and Dotenv to start server
const express = require('express');
const dotenv = require('dotenv');

// Load Config File && env Variables
dotenv.config({ path: './config/config.env' });

// Assign PORT Variable
const PORT = process.env.PORT || 5000;

// Initialize Express
const app = express();

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
