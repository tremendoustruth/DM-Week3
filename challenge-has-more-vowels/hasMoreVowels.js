const hasMoreVowels(word){
    let vowelnum = 0;
    let consnum = 0;
    for (let i = 0; i <word.length; i++){
        if (word[i] == "a"|| word[i] == "e"|| word[i] == "o"||word[i]=="u"||word[i]=="i"){
            vowelnum+=1
        } else consnum+=1
    }
    if (vowelnum>consnum){
        return true
    } else return false
}
hasMoreVowels("Bushra");
