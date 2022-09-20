class Employee {
      constructor(ename, esal) {
            this._ename = ename;
            this._esal = esal;
      }
      set ename(ename) { this._ename = ename; }
      get ename() { return this._ename; }
      set esal(sal) { this._esal = sal; }
      get esal() { return this._esal; }
      display() {
            console.log(`Data is ${this.ename} and ${this.esal}`)
      }
}
let e1 = new Employee();
//e1.setEname('AA')
e1.ename = 'AAA';
//e1.setEsal(200);
e1.esal = 200;
e1.display();