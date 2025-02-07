function fucn1(){
    console.log("This is the callback function")
}

function func2(){
    console.log("This is another callback function")
}

function higherOrder(func1, func2){
    console.log("This is the higher order function")
    func1()
    func2()
}

higherOrder(fucn1, func2)

const n = [1, 2, 3, 4, 5];

// map
const square = n.map((num) => num * num);
console.log(square);

// filter
const even = n.filter((num) => num % 2 === 0);
console.log(even);

// reduce
const numbers = [5, 10, 15, 20];
const max = numbers.reduce((acc, num) => {
    if (num > acc){
        return num
    } else {
        return acc
    }
}, numbers[0]);
console.log(max);