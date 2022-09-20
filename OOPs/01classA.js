class Process {
     // pid ;      pcode;
      constructor(pid, pcode) {
            this.pid = pid;
            this.pcode = pcode == undefined ? "DEFAULT" : pcode;
      }

      display() {
            console.log(`Hello Data ${this.pid} and ${this.pcode}`);
      }
}
let p1 = new Process(10);
p1.display();