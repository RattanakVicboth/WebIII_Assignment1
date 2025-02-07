// There are 2 ways we can do it:


// (1) using await it inside an async function
// No need to create new promise 
// faster execution

const fs = require("fs").promises;

async function readFilesSequentially() {
    try {
        const filePaths = ["file1.txt", "file2.txt", "file3.txt", "file4.txt"];

        for (const filePath of filePaths) {
            const data = await fs.readFile(filePath, "utf-8"); 
            console.log("File content:", data);
        }
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

readFilesSequentially();



// (2) using promise.all(parallel execution)
//cleaner and more efficient.
// faster execution


async function readFilesConcurrently() {
    try {
        const filePaths = ["file1.txt", "file2.txt", "file3.txt", "file4.txt"];
        const filePromises = filePaths.map(path => fs.readFile(path, "utf-8"));

        const fileContents = await Promise.all(filePromises);

        fileContents.forEach((content, index) => {
            console.log(`File ${index + 1} content:`, content);
        });
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

readFilesConcurrently();
