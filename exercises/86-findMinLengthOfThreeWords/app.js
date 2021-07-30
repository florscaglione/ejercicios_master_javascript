// Write your function here
function findMinLengthOfThreeWords(word1, word2, word3){
    if(word1.length < word2.length && word1.length < word3.length){
        return word1.length;
    }else if(word2.length < word3.length){
        return word2.length;
    }else{
        return word3.length;
    }
}

var output = findMinLengthOfThreeWords('a8', 'be8', 's');
console.log(output);

//funciona, pero no entiendo el primer if. Sin tener en
//cuenta la word3??