// console.log("Practice Set")
// let arr =[3,4,5,6]
// return Add(arr)
// console.log(arr)


// function reverse(str) {
// 	return str.split('').reverse().join('');
// }

// let string = ("hello")
// let revstr = reverse(string)
// console.log(revstr)

// function reverse(str) {
//     return str.split('').reverse().join('');
// }
// let string = ('bull') 
// let revstr =reverse(string)
// console.log(revstr)

// const array = [1, 2, 3, 4, 5];
// const sum = array.reduce((acc, curr)  => acc + curr, 0);
// console.log("Sum of Array:", sum);

// const arr = [22, 45, 99, 12];
// const largest = Math.(...arr);
// console.log("Largest number:", largest);'

// Q NO 3 function random(min, max) {
//     const integer = Math.floor(Math.random() * (max - min + 1)) + min;
//     return integer;
// }

// console.log(random(1, 20));


// function VowelCount(str) {
//     const VowelCount = str.match(/[aeiou]/gi);
//     return VowelCount ? VowelCount.length : 0;
// }
// const str = "Hello Guys";
// const count =VowelCount(str);
// console.log(count)
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = removeDuplicates(arr);
console.log(uniqueArr);
// Output: [1, 2, 3, 4, 5]
