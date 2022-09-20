class Employee {
      constructor(ename, esal) {
            this.ename = ename;
            this.esal = esal;
      }
      setEname(ename) {
            this.ename = ename;
      }
      getEname() { return this.ename; }
      setEsal(sal) { this.esal = sal; }
      getEsal() { return this.esal; }
      display() {
            console.log(`Data is ${this.ename} and ${this.esal}`)
      }
}
let e1 = new Employee();
e1.setEname('AA')
e1.setEsal(200);
e1.display();