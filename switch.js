class Student {
  constructor(gpa, credits){
    this.gpa = gpa;
    this.credits = credits;
  }

  stringGPA() {
    return this.gpa.toString();
  }

  get level() {
    switch (true) {
      case (this.credits > 90): return "Senior"
      case (this.credits >= 61) && (this.credits <= 90): return "Junior"
      case (this.credits >= 31) && (this.credits <= 60): return "Sophomore"
      case (this.credits <= 30): return "Freshman"
    }
  }
}

const student = new Student(3.9, 29);
console.log( student.level );
