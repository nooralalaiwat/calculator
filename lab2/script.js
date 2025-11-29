
//2
const foods1 = ['pizza','cheeseburger']
foods.push('pizza')
foods.push('cheeseburger')
console.log('Exercise 2 result:', foods);
//3
foods.unshift('taco')
console.log('Exercise 3 result:', foods);

//4
const foods = ["burger", "pizza", "pasta"];
const favFood = foods[1];
console.log('Exercise 4 result:', favFood);

//5
const foods2 = ["burger", "pizza", "pasta"];
foods2.splice(1, 1);
console.log('Exercise 5 result:', foods2);

//6
const foods3 = ["burger", "pizza", "pasta"];
foods3.splice(1, 1, "sushi", "cupcake");
console.log('Exercise 6 result:', foods3);

//7
const foods4 = ["burger", "pizza", "sushi", "cupcake", "pasta"];
const yummy = foods.slice(2, 4);
console.log('Exercise 7 result:', yummy);

//8
const foods5 = ["burger", "pizza", "sushi", "cupcake", "pasta", "tofu"];
const soyIdx = foods5.indexOf("tofu");
console.log('Exercise 8 result:', soyIdx);

//9
const foods6 = ["taco", "sushi", "cupcake"];
console.log(foods.includes("sushi"));  
console.log(foods.includes("burger"));  

//10
const foods7 = ["taco", "sushi", "cupcake", "tofu", "cheeseburger"];
const hasSoup = foods7.includes("soup");
console.log('Exercise 10 result:', hasSoup);

//11
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];

for (let num of nums) {
  if (num % 2 !== 0) {
    odds.push(num);
  }
}
console.log('Exercise 11 result:', odds);

//12
const nums2 = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const fizz = [];
const buzz = [];
const fizzbuzz = [];

for (let i = 0; i < nums.length; i++) {
  const n = nums[i];

  if (n % 3 === 0) {
    fizz.push(n);
  }

  if (n % 5 === 0) {
    buzz.push(n);
  }

  if (n % 3 === 0 && n % 5 === 0) {
    fizzbuzz.push(n);
  }
}
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);
console.log('Exercise 15 result:\n', total);