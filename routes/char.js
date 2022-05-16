const express = require('express');
const routes = express();

const CharacterController = require('../controllers/char');
const charController = new CharacterController();

routes.get('/', charController.getCharacter);
routes.post('/', charController.insertCharacter);
routes.delete('/:id', charController.deleteCharacter);
routes.patch('/:id', charController.updateCharacter);

module.exports = routes;
