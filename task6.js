class Loan {
    constructor(loanAmount, interestRate, loanTerm, borrower) {
      this.loanAmount = loanAmount;
      this.interestRate = interestRate / 100; // Convert percentage to decimal
      this.loanTerm = loanTerm; // Loan term in years
      this.borrower = borrower; // Reference to borrower information
      this.isApproved = false; // Loan approval status
      this.monthsPaid = 0; // Track the number of months paid
    }
  
    // Method to calculate monthly payment (EMI) using the formula for fixed payments
    calculateMonthlyPayment() {
      const monthlyInterestRate = this.interestRate / 12;
      const numberOfPayments = this.loanTerm * 12;
  
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
      if (this.isApproved) {
        this.monthsPaid++;
      } else {
        console.log("Loan is not approved yet.");
      }
    }
  }
  
  class Borrower {
    constructor(name, monthlyIncome, bankBalance) {
      this.name = name;
      this.monthlyIncome = monthlyIncome;
      this.bankBalance = bankBalance;
    }
  }
  
  class LoanManager {
    constructor() {
      this.loans = []; // Store all loan objects
    }
  
    // Method to apply for a loan
    applyForLoan(borrower, loanAmount, interestRate, loanTerm) {
      const loan = new Loan(loanAmount, interestRate, loanTerm, borrower);
      this.loans.push(loan);
      return loan;
    }
  
    // Method to approve a loan based on eligibility criteria
    approveLoan(loan) {
      if (loan.borrower.monthlyIncome >= 30000 && loan.borrower.bankBalance >= loan.loanAmount * 0.2) {
        loan.isApproved = true;
        console.log(`Loan approved for ${loan.borrower.name}`);
      } else {
        console.log(`Loan rejected for ${loan.borrower.name}: Does not meet eligibility criteria`);
      }
    }
  
    // Method to reject a loan manually
    rejectLoan(loan) {
      loan.isApproved = false;
      console.log(`Loan rejected for ${loan.borrower.name}`);
    }
  
    // Method to check the status of all loans
    checkLoanStatuses() {
      this.loans.forEach(loan => {
        const status = loan.isApproved ? "Approved" : "Not Approved";
        console.log(`Loan for ${loan.borrower.name}: ${status}`);
      });
    }
  }
  
  // Example usage:
  
  // Create a LoanManager instance
  const loanManager = new LoanManager();
  
  // Create borrowers
  const borrower1 = new Borrower("John Doe", 35000, 50000); // Eligible borrower
  const borrower2 = new Borrower("Jane Smith", 25000, 10000); // Not eligible borrower
  
  // Apply for loans
  const loan1 = loanManager.applyForLoan(borrower1, 100000, 5, 10); // John applies for loan
  const loan2 = loanManager.applyForLoan(borrower2, 50000, 6, 5); // Jane applies for loan
  
  // Approve or reject loans
  loanManager.approveLoan(loan1); // Should approve
  loanManager.approveLoan(loan2); // Should reject
  
  // Check the loan statuses
  loanManager.checkLoanStatuses(); // Will show loan statuses for all loans
  
  // Simulate payment
  loan1.payEMI(); // John pays 1 EMI
  console.log(loan1.checkLoanStatus()); // Check John's loan status
  