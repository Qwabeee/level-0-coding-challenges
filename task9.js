
//task 9

function printVowels(str){
    const input = str;
    const vowels = /[aeiou]/gi;
    const result = input.match(vowels);
    let output = [];

    for(let i = 0; i < result.length; i++){
        if( output.indexOf(result[i]) === -1){
            output.push(result[i]);
            
   }
  
  };
  console.log(`Vowels: ${output.join(",")}`);
}
