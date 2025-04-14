// const phoneBook = {
//   "Valera": 23642369,
//   "Inga": 459845798,
//   "Venik": 345543553,
//   "Egor": 4345345355,
//   "Lida": 3453453535
// };

// const copyPhoneBook = phoneBook;

// phoneBook["Valera"] = 5555555555;
// phoneBook["Lutik"] = 3453453453;
// delete phoneBook["Egor"];

// console.log(copyPhoneBook);

const studentGrades = {
  grades: {
    "Alice": 90,
    "Bob": 75
  },
  showGrade(name) {
    console.log(name + "'s grade is " + this.grades[name])// выведи в консоль, например: "Alice's grade is 90"
  }
};

studentGrades.showGrade("Alice")