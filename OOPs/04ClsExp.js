let person = class {
      constructor(pname) {
            this.pname = pname;
      }
      display() { 
            console.log(this.pname);
      }
}
//let p1 = new person('AJAY');
//p1.display();

let employee = class {
      constructor(ename) {
            this.ename =ename;
      }
      display() {
            console.log(this.ename);
      }
}
//let e1 = new employee('SAM');
//e1.display();

function myClsFactory(aClsName,input) {
      let ob = new aClsName(input);
      ob.display();
}
myClsFactory(employee, 'AJAY');
myClsFactory(person, 'John');