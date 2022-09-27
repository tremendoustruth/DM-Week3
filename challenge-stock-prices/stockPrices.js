// //This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

// The best function will be given an array of stock prices in the order they happened throughout the day.

// It should return the maximum possible profit on the stock for that day.

// For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:
let sample = [1,5,25,30,10,17]
function ifOnlyItWereThisEasy(arr){
    let profits = [];
    let lowest = arr[0]
    for (const currprice of arr) {
        if (currprice < lowest)
            lowest = currprice
        currentProfit = currprice - lowest
        console.log(`current profit is ${currentProfit}`)
        profits.push(currentProfit);
    } 

    return profits;
}
maxProfit(arr){
    let maxProf = 0;
    for (let i = 0; i<profits.length; i++)
        if profits[i]>maxProf
        maxProf = profits[i]
    return maxProf
}
console.log(ifOnlyItWereThisEasy(sample));

 // returns max profit of 29; buy at 1, sell at 30
[15, 3, 20, 21, 20, 1] // returns max profit of 18; buy at 3 sell at 21 
[5, 4, 3, 2, 1] // returns max profit of 0; 

// variables we need: min and max of the array, index of the minimum and maximum, rules for each case; 
// if indexofmin < indexofmax, return max - min, min = buy, max = sell
// else if indexofmax < index of min