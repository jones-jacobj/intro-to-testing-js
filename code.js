// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name){
    return "Hello, " + name + "!";
}

function isFive(input){
    return input === 5;
}

function isEven(num){
    if(typeof(num) == 'number' && num != Infinity){
        return num % 2 === 0;
    }
    return false;
}

function isVowel(letter){
    if(letter){letter = letter.toLowerCase();}
    return letter === 'a';
}