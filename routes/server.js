const express = require('express');
const app = express();

const routes = express.Router();

const myController = require('../controllers')

routes.get('/professional',myController.displayWeb)

module.exports = routes;