const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const validations = require('./middlewares/validations');

const routes = express.Router();

routes.post('/sessions', validations.loginRequired, SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', validations.createOngs, OngController.create);

routes.get('/profile', validations.isAuthorization, ProfileController.index);

routes.post('/incidents', validations.isAuthorization, validations.createIncidents, IncidentController.create);
routes.get('/incidents', validations.isNumberPaginate, validations.isAuthorization, IncidentController.index);
routes.delete('/incidents/:id', validations.isNumberDel, IncidentController.delete);

module.exports = routes;