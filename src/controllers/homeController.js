const Contato = require('../models/ContatoModel');

exports.index = async(req, res) => {
  const contacts = await Contato.searchContacts();
  res.render('index', { contacts });
}
