function generateFibonacci(n) {
    const fibonacci = [0, 1];
  
    // Generate Fibonacci series
    for (let i = 2; i < n; i++) {
      const nextNumber = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(nextNumber);
    }
  
    return fibonacci;
  }
  
  function displayFibonacciReverse(n) {
    const fibonacciSeries = generateFibonacci(n);
    
    // Display in reverse order
    console.log("Fibonacci series in reverse order:");
    for (let i = fibonacciSeries.length - 1; i >= 0; i--) {
      console.log(fibonacciSeries[i]);
    }
  }
  
  // Example usage
  const n = 10; // Number of terms in the Fibonacci series
  displayFibonacciReverse(n);
  