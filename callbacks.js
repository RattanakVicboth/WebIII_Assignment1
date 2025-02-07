const fs = require("fs")

const filePath = 'Hello_world.txt'

const readData =  (error, data) => {
    if (error){
        console.log('Error reading file:', error)
    } else {
        console.log('File content:', data)
    }
}

fs.readFile(filePath, 'utf-8', readData)

console.log("last line of code")