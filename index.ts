let food:string = 'popcorn'
console.log(food);


let named:string = 'John Doe'
console.log(named);

let display = document.getElementById('show') as HTMLElement
display.innerHTML = named

// ? - optional chaining operator ==== This operator checks if the result of document.getElementById('show') is null or undefined.

let arr: number[] = [1, 2, 3, 4, 5]
arr.push(6)
console.log(arr);
