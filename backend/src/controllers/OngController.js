const generateUniqueId = require('../utils/generateUniqueId');
const conncetion = require('../database/connection');

module.exports = {
  async index(req, res)  {
    const ongs = await conncetion('ongs').select('*');
    return res.json(ongs);
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = generateUniqueId();

    await conncetion('ongs').insert({
      id,
      name, 
      email,
      whatsapp,
      city,
      uf,
    });
    
    return res.json({ id });
  }
};