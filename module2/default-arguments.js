function calculateBill(total, tax = 0.13, tip = 0.15) {
  // if (tax === undefined) {
  //     tax = 0.13;
  // }
  // if (top === undefined) {
  //     tip = 0.15
  // }

  // tax =  tax || 0.13
  // tip = tip || 0.15;
  return total + total * tax + total * tip;
}

const totalBill = calculateBill(100);
const totalBill1 = calculateBill(100, undefined, 0.25) //if we want to pass in customized arguments and one is missing, we should use undefined. 
console.log(totalBill);
