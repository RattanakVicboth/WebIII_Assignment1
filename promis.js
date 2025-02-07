// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let succes = true
//         if (succes) {
//             resolve("Data fetched succesfully!")
//         } else {
//             reject("Error: Unable to fetch data.")
//         }
//     }, 1000)
// })

// myPromise 
//     .then(data => console.log(data))
//     .then(() => console.log("Hello"))
//     .catch(err => console.log("Error"))


// let readFilePromise = (filePath) => {
//     return new Promise((resolve,reject) => {
//         fs.readFile(filePath, 'utf8', (err, data) => {
//             if (err){
//                 reject(err)
//             } else {
//                 resolve (data)
//             }
//         })
//     })
// }


const fs = require('fs').promises;

function readFilePromise(filePath) {
    return fs.readFile(filePath, 'utf-8');
}

const filePath1 = 'file1.txt';
const filePath2 = 'file2.txt';
const filePath3 = 'file3.txt';
const filePath4 = 'file4.txt';

readFilePromise(filePath1)
    .then(data => {
        console.log('File content:', data);
        return readFilePromise(filePath2);
    })
    .then(data => {
        console.log('File content:', data);
        return readFilePromise(filePath3);
    })
    .then(data => {
        console.log('File content:', data);
        return readFilePromise(filePath4);
    })
    .then(data => {
        console.log('File content:', data);
    })
    .catch(error => {
        console.error('Error reading file:', error);
    });
