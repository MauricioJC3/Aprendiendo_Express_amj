function generatePassword(length) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    const allChars = uppercase + lowercase + numbers + symbols;
    let password = '';
    
    // Asegurar al menos un carácter de cada tipo
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    // Rellenar con caracteres aleatorios
    for (let i = 4; i < length; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    // Mezclar la contraseña
    return password.split('').sort(() => Math.random() - 0.5).join('');
  }
  
  module.exports = { generatePassword };

  //Opcion

/**

function generatePassword(length) {
  const charSets = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
  };

  const allChars = Object.values(charSets).join('');
  const getRandomChar = set => set[Math.floor(Math.random() * set.length)];

  // Generar al menos un carácter de cada tipo
  let password = Object.values(charSets).map(getRandomChar).join('');

  // Rellenar con caracteres aleatorios y mezclar
  return (password + Array.from({ length: length - 4 }, () => getRandomChar(allChars)).join(''))
      .split('').sort(() => Math.random() - 0.5).join('');
}

module.exports = { generatePassword };


 */
