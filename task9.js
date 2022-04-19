
//task 9

function printVowels(str){
    let input = str;
    let vowels = /[aeiou]/gi;
    let result = input.match(vowels);
    console.log("Vowels: ", result);
}