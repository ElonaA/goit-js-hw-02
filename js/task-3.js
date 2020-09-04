// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function (string) {
    let stringWords = string.split(' ');
    let LongestWord = stringWords[0];
    // console.log(stringWords[0]);
    for (const word of stringWords) {
        if (word.length > LongestWord.length) {
            LongestWord = word;
        }
    }
    return LongestWord;

};


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'