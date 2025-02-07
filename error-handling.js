try {
    let result = x * 10;
} catch (error){
    console.log("An error occurred:", error.message);
}

try {
    console.log("Trying to excute code...");
    throw new Error("Something went wrong!");
} catch (error){
    console.log("Caught an error:", error.message);
} finally {
    console.log("This always runs.");
}