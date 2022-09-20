let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let count = 0;
for (const temp of arr1) {
      count += temp;
}
console.log(count);

let colors = ['green', 'red', 'yellow', 'blue'];
for (const [i,v] of colors.entries()) {
      console.log(i + ': ' + v);
}