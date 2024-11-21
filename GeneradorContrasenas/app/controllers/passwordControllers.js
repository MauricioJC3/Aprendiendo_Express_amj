const { generatePassword } = require('../../utils/passwordGenerator');

const createPassword = (req, res) => {
  const { length } = req.body;
  
  if (!length || length < 8) {
    return res.status(400).json({ 
      error: 'La longitud debe ser al menos 8 caracteres' 
    });
  }
  
  const password = generatePassword(length);
  res.json({ password });
};

module.exports = { createPassword };