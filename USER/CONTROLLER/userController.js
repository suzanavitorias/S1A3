const userModel =  require('../models/userModel');

const creaUser = (req, res) => {
  const newUser = req.body;
  res.send('Usuario $(newUser, name} criado com sucesso');
};

module.exports = {createUser};
