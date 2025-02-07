import * as fs from 'fs';

const filePath = 'Hello_world.txt'

const readFileAsync = async (filePath) => {
    return fs.promises.readFile(filePath, 'utf8')
}

let data = await readFileAsync(filePath)
console.log(data)