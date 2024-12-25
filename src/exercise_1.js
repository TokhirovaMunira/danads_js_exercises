/**
 * Write a function to check if a string is empty 
 * @param {String} text
 * @returns {Boolean}
 * @example
 * isStringEmpty('abc'); => false
 * isStringEmpty(''); => true
 * isStringEmpty('   '); => true
 * isStringEmpty(); => throws error "text must be defined"
 */
function isStringEmpty(text) {
  if (text === undefined) {
    throw new Error('text must be defined');
  }
  return text.trim() === '';
}
//return !(text && text.trim());


/**
 * Write a function to truncate text
 * @param {String} text 
 * @param {Number} numberOfCharacters
 * @returns {String} 
 * @example
 * truncateString('Hello World', 2); => 'He'
 * truncateString('Hello world'); => throws error "Please specify number of characters to extract"
 * truncateString(''); => throws error "text must have at least one character"
 */
function truncateString(text, numberOfCharacters) {
  if (isStringEmpty(text)) {
    throw new Error(`text must have at least one character`)
  }
  if (numberOfCharacters === undefined) {
    throw new Error(`Please specify number of characters to extract`)
  }
  return text.substring(0, numberOfCharacters);
}

/**
 * Write a function to create social media post hash tag
 * @param {String} text 
 * @returns {String}
 * @example
 * createHashTag('Hello World'); => '#helloWorld'
 * createHashTag('i love javascript'); => '#iLoveJavascript'
 * createHashTag(''); => throws error "Text should have at least three characters"
 * createHashTag(); => throws error "Text should have at least three characters"
 * createHashTag('   '); => throws error "Text should have at least three characters"
 */
function createHashTag(text) {
  if (text === undefined) {
    throw new Error(`Text should have at least three characters`)
  }
  if (text.length < 3) {
    throw new Error(`Text should have at least three characters`)
  }
  if (text.trim().length < 3) {
    throw new Error(`Text should have at least three characters`)
  }
  let words = text.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }
  let newText = words.join(' ');
  newText = newText.charAt(0).toLowerCase() + newText.slice(1);
  return "#" + newText.replaceAll(' ', '');
}

/**
 * Write a function to format phone number as '+998 99 777 66 55'
 * @param {Number} phoneNumber 
 * @returns {String}
 * @throws {Error} 'Phone number must be either 9 or 12 characters long'
 * @example
 * formatPhoneNumber(998997776655); => '+998 99 777 66 55'
 * formatPhoneNumber(997776655); => '+998 99 777 66 55'
 * formatPhoneNumber(7776655); => throws error "Phone number must be either 9 or 12 characters long"
 * formatPhoneNumber(777665544332211); => throws error "Phone number must be either 9 or 12 characters long"
 * formatPhoneNumber(); => throws error "Phone number must be either 9 or 12 characters long"
 */
function formatPhoneNumber(phoneNumber) {
  if (phoneNumber === undefined || phoneNumber === null) {
    throw new Error('Phone number must be either 9 or 12 characters long');
  }
  let phoneString = phoneNumber.toString();
  if (phoneString.length === 9) {
    phoneString = '998' + phoneString;
  } else if (phoneString.length !== 12) {
    throw new Error('Phone number must be either 9 or 12 characters long');
  }
  let formattedPhone = phoneString.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 $2 $3 $4 $5');

  return formattedPhone;
}

/**
 * Write a function that transforms text to different cases
 * @param {String} text 
 * @param {'camel'|'kebab'|'snake'} caseName - 'camel', 'kebab', 'snake'
 * @returns {String}
 * @example
 * changeTextCase('Hello World', 'camel'); => 'helloWorld'
 * changeTextCase('Hello World', 'kebab'); => 'hello-world'
 * changeTextCase('Hello World', 'snake'); => 'hello_world'
 * 
 */
function changeTextCase(text, caseName) {
  if (!text || !caseName) {
    throw new Error('Both text and caseName are required');
  }
  let words = text.toLowerCase().split(' ');
  words = words.filter(word => word.trim() !== '');
  if (caseName === 'camel') {
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join('');
  } else if (caseName === 'kebab') {
    return words.join('-');
  } else if (caseName === 'snake') {
    return words.join('_');
  }
}

/**
 * Write a function to replace a given word in the text with the replacement word
 * @param {String} text - Some text
 * @param {String} word - A word that needs to be replaced
 * @param {String} replacement - A new word that will replace 'word' argument in the 'text'
 * @returns {String}
 * @example
 * const bigText = 'Winnie-the-Pooh (also known as Edward Bear, Pooh Bear or simply Pooh) is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard. Winnie-the-Pooh first appeared by name in a children's story commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a bear they had viewed at London Zoo.';
 * const replacedWord = 'Pooh';
 * const replacementWord = 'Puff'
 * replaceWordInText(bigText, replacedWord, replacementWord); =>
 * 'Winnie-the-Puff (also known as Edward Bear, Puff Bear or simply Puff) is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard. Winnie-the-Puff first appeared by name in a children's story commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a bear they had viewed at London Zoo.'
 */
function replaceWordInText(text, word, replacement) {
  if (!text || !word || !replacement) {
    throw new Error("All arguments (text, word, replacement) are required");
  }
  const regex = new RegExp(`\\b${word}\\b`, 'g');
  const updatedText = text.replace(regex, replacement);
  return updatedText;
}

const bigText = 'Winnie-the-Pooh (also known as Edward Bear, Pooh Bear or simply Pooh) is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard. Winnie-the-Pooh first appeared by name in a children\'s story commissioned by London\'s Evening News for Christmas Eve 1925. The character is inspired by a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a bear they had viewed at London Zoo.';
const replacedWord = 'Pooh';
const replacementWord = 'Puff';

console.log(replaceWordInText(bigText, replacedWord, replacementWord));

/**
 * Write a function to extract price in number format from the text
 * @param {String} text 
 * @returns {Number}
 * @example
 * extractPriceFromText('Apple price in market is $2.32 per kg now'); => 2.32
 * extractPriceFromText('Apple price in market is $5 per kg now'); => 5
 * extractPriceFromText('There were no apples left in the shop'); => 'No matching price was found'
 */
function extractPriceFromText(text) {
  const priceMatch = text.match(/\$([0-9]+(\.[0-9]+)?)/);
  if (priceMatch) {
    return parseFloat(priceMatch[1]);
  } else {
    return 'No matching price was found';
  }
}


module.exports = {
  changeTextCase,
  createHashTag,
  extractPriceFromText,
  isStringEmpty,
  replaceWordInText,
  truncateString,
  formatPhoneNumber
}