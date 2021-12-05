//retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`)

//retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\narray com as posições separadas pelo delimitador:', splittedText);

//troca de valores
const replacedText = 'Texto'.replace('Text','txeT');
console.log('\nSubstituição de valor:', replacedText)

//retorna um "pedaço" da string
const lastChar = 'Texto'.slice(-1);
console.log('\última letra de uma string:', lastChar);

const allWithoutLastChar = 'Texto'.slice(0,-1);
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última:', secondToEnd);

//retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0,2);
console.log('\nAs duas primeiras letras são:', twoCharsBeforeFirstPos);
