function calculateSalary(monthlyPayScale, deductions) {
    const fixedSalary = 25000;  // Fixed monthly salary
    const finalSalary = fixedSalary - deductions;
    
    console.log(`Your final salary after deductions is: ${finalSalary}`);
}

// Example usage:
const monthlyPayScale = 25000;  // You can adjust this if needed
const deductions = 5000;  // Example deduction amount

calculateSalary(monthlyPayScale, deductions);
