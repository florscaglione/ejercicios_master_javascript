function checkAge(name, age) {
  // your code here
    if(age < 21){
        return "Go home, " + name + "!";
    }else{
        return "Welcome, " + name + "!";   
    }

}

var output = checkAge('Adrian', 26);
console.log(output); 