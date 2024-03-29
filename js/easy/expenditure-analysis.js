/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let Arr = new Array();

  for(let i of transactions){
    let check = false;
    //for loop for checking if category exist
    for(let j of Arr){
      if(j.category === i.category){
        j.totalSpent = j.totalSpent + i.price;
        check = true;
      }
    }
    //check is an Marker if category not exist
    if(!check){
      let obj = {
        category:i.category,
        totalSpent:i.price
      }
      Arr.push(obj);
    }
    
  }
  return Arr;
}
let obj = [{
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
}]
let ans = calculateTotalSpentByCategory(obj);
console.log(ans);
module.exports = calculateTotalSpentByCategory;
