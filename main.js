const phoneBook = {
  list: {
  "Valera": 23642369,
  "Inga": 459845798,
  "Venik": 345543553,
  "Egor": 4345345355,
  "Lida": 3453453535
},

// add(name, number) {
//   this.list[name] = number;
// },
// del(name) {
//   delete this.list[name];
// }
}

for (const name in phoneBook.list) {
  console.log(name + ' - ' + phoneBook.list[name]);
}

// const copyPB = structuredClone(phoneBook);
// phoneBook.list = "empty";
// console.log(copyPB.list);

// phoneBook.add("Oscar", 123123123);
// phoneBook.del("Venik");
// console.log(phoneBook.list);

// const copyPhoneBook = phoneBook;

// phoneBook["Valera"] = 5555555555;
// phoneBook["Lutik"] = 3453453453;
// delete phoneBook["Egor"];

// console.log(copyPhoneBook);

// const studentGrades = {
//   grades: {
//     "Alice": 90,
//     "Bob": 75
//   },
//   showGrade(name) {
//     console.log(name + "'s grade is " + this.grades[name])// выведи в консоль, например: "Alice's grade is 90"
//   }
// };

// studentGrades.showGrade("Alice")

