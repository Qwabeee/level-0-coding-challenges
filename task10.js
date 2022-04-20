
     //task 10

     function commonCharacters(str1, str2){
        const input1 = str1.split("");
        const input2 = str2.split("");
        let commonLetters = "";
    
        for(let letter in input1){
            if(input2.indexOf(input1[letter]) > 0 && commonLetters.indexOf(input1[letter]) < 0){   
                commonLetters != "" ? commonLetters += "," + input1[letter] : commonLetters += input1[letter]; 
            }
        }

        for(let letter in input2){
            if(input1.indexOf(input2[letter]) > 0 && commonLetters.indexOf(input2[letter]) < 0){   
                commonLetters != "" ? commonLetters += "," + input2[letter] : commonLetters += input2[letter]; 
            }
        }

        if(commonLetters == ""){
            console.log("no matching letters");
        }
       if(commonLetters != ""){
        console.log("Common letters: " + commonLetters)
       };
    };
    
    
    
    
