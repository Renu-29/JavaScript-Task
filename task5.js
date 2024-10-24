class Loan {
    constructor(loanAmount, interestRate, loanTerm) {
      this.loanAmount = loanAmount; // Principal loan amount
      this.interestRate = interestRate / 100; // Convert percentage to decimal
      this.loanTerm = loanTerm; // Loan term in years
      this.monthsPaid = 0; // Track the number of months paid
    }
  
    // Method to calculate monthly payment (EMI) using the formula for fixed payments
    calculateMonthlyPayment() {
      const monthlyInterestRate = this.interestRate / 12;
      const numberOfPayments = this.loanTerm * 12;
  
      // EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
      if (monthlyInterestRate === 0) {
        return this.loanAmount / numberOfPayments; // Handle zero interest case
      }
  
      const emi = this.loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) /
                  (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      
      return emi;
    }
  
    // Method to check loan status (how many EMIs paid and remaining amount including interest)
    checkLoanStatus() {
      const totalPayments = this.loanTerm * 12;
      const monthlyPayment = this.calculateMonthlyPayment();
      const totalAmountPaid = this.monthsPaid * monthlyPayment;
      const remainingAmount = (totalPayments - this.monthsPaid) * monthlyPayment;
  
      return {
        monthsPaid: this.monthsPaid,
        totalAmountPaid: totalAmountPaid,
        remainingAmount: remainingAmount
      };
    }
  
    // Method to simulate paying one EMI
    payEMI() {
      this.monthsPaid++;
    }
  }
  
  // Example usage:
  const loan = new Loan(100000, 5, 10);  // Loan of 100,000 with 5% interest over 10 years
  
  console.log("Monthly Payment (EMI):", loan.calculateMonthlyPayment().toFixed(2));
  
  // Simulating paying 12 EMIs (1 year)
  for (let i = 0; i < 12; i++) {
    loan.payEMI();
  }
  
  console.log("Loan Status after 1 year:", loan.checkLoanStatus());
  