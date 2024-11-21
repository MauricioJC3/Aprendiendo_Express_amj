function generatePassword(options) {
  const {
    length,
    includeLowercase = true,
    includeUppercase = true,
    includeNumbers = true,
    includeSymbols = true,
    startsWith = ''
  } = options;

  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let allowedChars = '';
  if (includeLowercase) allowedChars += lowercase;
  if (includeUppercase) allowedChars += uppercase;
  if (includeNumbers) allowedChars += numbers;
  if (includeSymbols) allowedChars += symbols;

  if (allowedChars === '') {
    throw new Error('Debe seleccionar al menos un tipo de carácter');
  }

  let password = startsWith;
  const remainingLength = length - startsWith.length;

  for (let i = 0; i < remainingLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
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
