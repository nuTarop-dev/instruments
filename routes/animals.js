const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { Animal } = require('../models');

router.get('/all', [auth], async (req, res) => {
  const { user_id } = req.user;

  res.send(await Animal.findAll({ where: { userId: user_id } }));
});

router.get('/:id', [auth], async (req, res) => {
  const { user_id } = req.user;

  res.send(
    await Animal.findAll({ where: { userId: user_id, id: req.params.id } })
  );
});

router.post('/', [auth], async (req, res) => {
  const { user_id } = req.user;
  const { mom, dad, tag, dd, mm, yy } = req.body;
  Animal.create({ tag, dd, mm, yy, userId: user_id })
    .then(async (result) => {
      if (mom) {
        let mother = await Animal.findByPk(mom);
        result.setMom(mother);
      }
      if (dad) {
        let father = await Animal.findByPk(dad);
        result.setDad(father);
      }
      res.send('Ok');
    })
    .catch((e) => res.send(e.message));
});
module.exports = router;
