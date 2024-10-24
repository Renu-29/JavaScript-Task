class Student {
    constructor(name, gpa) {
      this.name = name;
      this.gpa = gpa;
    }
  
    // Method to check scholarship eligibility
    checkScholarshipEligibility() {
      if (this.gpa >= 7.5) {
        return `${this.name} is eligible for the scholarship.`;
      } else {
        return `${this.name} is not eligible for the scholarship.`;
      }
    }
  }
  
  // Example usage
  const student1 = new Student("Alice", 8.0); // Eligible student
  const student2 = new Student("Bob", 7.0);    // Not eligible student
  
  console.log(student1.checkScholarshipEligibility()); // Alice is eligible for the scholarship.
  console.log(student2.checkScholarshipEligibility()); // Bob is not eligible for the scholarship.
  