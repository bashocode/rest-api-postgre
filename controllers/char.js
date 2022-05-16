const { Character } = require('../models');

class CharacterController {
  async getCharacter(req, res, next) {
    try {
      let chars = await Character.findAll({});
      chars = JSON.stringify(chars);
      chars = JSON.parse(chars);

      res.status(200).json({ data: chars });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  async insertCharacter(req, res, next) {
    const { name, element } = req.body;
    if (!name || !element) {
      res.status(400).json({ error: 'name and element are required!' });
    }

    const data = { name, element };
    try {
      let save = await Character.create(data);      
      res.status(201).json({ data: save });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  async deleteCharacter(req, res, next) {
    const { id } = req.params;
    if (!id) {
      res.sendStatus(404);
    }

    try {
      await Character.destroy({
        where: {
          id: id
        }
      });
      res.sendStatus(204);
    } catch (error) {
      res.sendStatus(404);
    }
  }

  async updateCharacter(req, res, next) {
    const { name, element } = req.body;
    const { id } = req.params;
    if (!name || !element) {
      res.status(400).json({ error: 'name and element are required!' });
    }
    if (!id) {
      res.sendStatus(404);
    }
    
    const data = { name, element };
    try {
      const update = await Character.update(data, {
        where: {
          id: id
        }
      });
      
      res.status(200).json({ data: update });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
}

module.exports = CharacterController;
