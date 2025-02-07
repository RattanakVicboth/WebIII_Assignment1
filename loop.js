// For loop with condition and updation
for (let i=0; i<5; i++){
    console.log(i)
}

// forEach()
let arr = [2, 4, 5, 6, 8, 9, 10]
arr.forEach(item => item % 2 === 0 && console.log(item))

// for....in
let bookObj = {
    id: 123,
    title: "Hello World",
    vol: 1,
    publishedYear: 2020
}
for (let key in bookObj){
    console.log(bookObj[key])
}