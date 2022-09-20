let employee = {
      ename: 'John',
      esal: 300,
      edesg : 'DEV'
};
console.log(employee.ename);
let { ename, esal, edesg} = employee;
console.log(ename, esal, edesg);