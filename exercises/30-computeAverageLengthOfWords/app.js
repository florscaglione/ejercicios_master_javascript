// Write your function here

function computeAverageLengthOfWords(word1, word2){
    let promedioLetras = (word1.length + word2.length) / 2;
    return promedioLetras;
}

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); 