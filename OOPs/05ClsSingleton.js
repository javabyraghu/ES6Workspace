let ob = new class {
      constructor(model) {
            this.model = model;
            console.log('TEST OBJ CREATED');
      }
      data() {
            console.log(`data is ${this.model}`);
      }
}('NEW MODEL');
ob.data();
