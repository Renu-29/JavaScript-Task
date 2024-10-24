// Function to sort array in descending order
function sortDescending(arr) {
    return arr.sort(function(a, b) {
        return b - a;
    });
}

// Example usage
let array = [34, 7, 23, 32, 5, 62];

console.log("Original Array: " + array);
let sortedArray = sortDescending(array);
console.log("Sorted Array in Descending Order: " + sortedArray);
