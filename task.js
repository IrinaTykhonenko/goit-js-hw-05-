// const Manager = function (name, sales, order) {
//   this.name = name;
//   this.sales = sales;
//   this.orders = order;
// };

// Manager.prototype.sell = function () {
//   this.sales += 1;
// };

// Manager.prototype.ord = function () {
//   this.orders -= 5;
// };

// Manager.prototype.changeName = function (name) {
//   this.name = name;
// };

// const mango = new Manager("mango", 5, 10);
// console.log(mango);
// mango.sell();
// console.log(mango);
// mango.sell();
// console.log(mango);
// mango.ord();
// console.log(mango);

// const poly = new Manager("poly", 10);
// console.log(poly);

// poly.changeName("poooollllyyyy");
// console.log(poly);

// class Guest {
//   // Аналог функции-конструктора
//   constructor(name, roomNumber) {
//     this.name = name;
//     this.roomNumber = roomNumber;
//   }

//   // Аналог Guest.prototype.getFullInfo
//   getFullInfo() {
//     console.log(`
//       Guest ${this.name}
//       Room number ${this.roomNumber}
//     `);
//   }
// }

// const mango = new Guest("Mango", 26);

// mango.getFullInfo();
// // Guest Mango
// // Room number 26
function checkIfCanAccessContent(subType) {
  const canAccessContent = "pro" || "vip"; // дополни эту строку

  return canAccessContent;
  console.log(canAccessContent);
}

console.log(checkIfCanAccessContent("starter"));
