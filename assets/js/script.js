
// Sorting array in a acending order
let arr = [0,0,7,2,3,4,5,1,17];

arr.sort((a,b)=> a-b);
arr.reverse();  
console.log(arr);



// Reversing string

let word = "Salam"

function reverseWord(word){
    let newword = word.split("").reverse().join("");
    return newword;
}

console.log(reverseWord(word));