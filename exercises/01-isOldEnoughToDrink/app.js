function isOldEnoughToDrink(edad){
    if(edad >= 21){
        return true;
    }else{
        return false;
    }

}
var output = isOldEnoughToDrink(22);
console.log(output);