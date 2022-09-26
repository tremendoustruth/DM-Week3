function hasMoreVowels(word){
    let vowelnum = 0; //initializes vowel count
    let consnum = 0; // initializes consonant count 
    for (let i = 0; i <word.length; i++)
        if (word[i] == "a"|| word[i] == "e"|| word[i] == "o"||word[i]=="u"||word[i]=="i") 
        //iterates through the string and checks against vowels with OR
            vowelnum+=1;
        else consnum+=1 // if the element is not a vowel, add to the consonant count;
    if (vowelnum>consnum) // exit loop and check to see if vowel count is larger
        return true;
    else return false;
}
console.log(hasMoreVowels("aaaaoooooooh")); 


//class review 
let hasMoreVowels2 = (word) => {
    let isMoreVowels = false;
    let vcount = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (const char of word) 
        if (vowels.includes(char))
            vcount++
    return vcount > word.length/2 // if count is more than half the length  of the word, then there are more vowels.
}

console.log(hasMoreVowels2("Bushra"));