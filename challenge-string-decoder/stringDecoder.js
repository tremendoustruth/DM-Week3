// In this challenge, you’ll write a decoder function. The function should take in a string and return a string.

// Start by creating a function called decoder that has a single parameter called code.

// Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).

// Each number tells you how many characters to skip before finding a good letter. After each good letter should come the next number.

// For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.

// So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.

function decoder(code){
    let split = code.split("")
    console.log(split)
    let decoded = ""
    for (let i = 0; i < split.length; i++) {
        if (!isNaN(+split[i])) //if (the char at the index at i is a number) 
            i += Number(split[i])     // skip to i+split[i]
        else 
            decoded += split[i] // add the char to the decoded string value 
        
    }
    return decoded
}

console.log(decoder('0y4akjfe0s'));
console.log(decoder("0w2erh1pa3hoot2ivu7hdwxzqup"));

// Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. Do not do this by just turning the number into a string and reversing it. Solve the problem using math. (Hint: look up while loops, and don’t forget about the % operator.)

const printDigits = num => {
    while (num) {
      let digitToPrint = num % 10
      console.log(digitToPrint)
      num = (num - digitToPrint) / 10
      console.log(num)
    }c
  }
  
  printDigits(12)
  printDigits(162)
  printDigits(597842)    