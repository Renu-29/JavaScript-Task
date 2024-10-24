// Function to remove duplicates from an array
function removeDuplicates(arr) {
    // Use Set to store unique elements
    let uniqueArray = [...new Set(arr)];
    return uniqueArray;
}

// Example usage
let array = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

console.log("Original Array: " + array);
let uniqueArray = removeDuplicates(array);
console.log("Array with Unique Elements: " + uniqueArray);
