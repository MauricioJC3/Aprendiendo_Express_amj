const { generatePassword } = require('../../utils/passwordGenerator');

const createPassword = (req, res) => {
  const { 
    length, 
    includeLowercase, 
    includeUppercase, 
    includeNumbers, 
    includeSymbols,
    startsWith 
  } = req.body;

  if (!length || length < 8) {
    return res.status(400).json({ 
      error: 'La longitud debe ser al menos 8 caracteres' 
    });
  }

  try {
    const password = generatePassword({
      length: parseInt(length),
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols,
      startsWith: startsWith || ''
    });

    res.json({ password });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createPassword };