let a = 10;
    let b = 20;

    console.log("a == b:", a == b);       // false
    console.log("a != b:", a != b);       // true
    console.log("a > b:", a > b);         // false
    console.log("a < b:", a < b);         // true
    console.log("a >= b:", a >= b);       // false
    console.log("a <= b:", a <= b);       // true
    console.log("a === b:", a === b);     // false
    console.log("a !== b:", a !== b);     // true

    let number = 7;

    if (number % 2 === 0) {
      console.log(number + " is Even");
    } else {
      console.log(number + " is Odd");
    }

     let age = 17;

    if (age >= 18) {
      console.log("Person is an Adult");
    } else {
      console.log("Person is a Minor");
    }
    let score = 76;
    let grade;

    if (score >= 90) {
      grade = "A";
    } else if (score >= 75) {
      grade = "B";
    } else if (score >= 60) {
      grade = "C";
    } else if (score >= 45) {
      grade = "D";
    } else {
      grade = "E";
    }

    console.log("Score:", score, "Grade:", grade);


    let temperature = 25;

    if (temperature > 30) {
      console.log("It's Hot");
    } else if (temperature >= 20 && temperature <= 30) {
      console.log("It's Warm");
    } else {
      console.log("It's Cool");
    }