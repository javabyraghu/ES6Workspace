function sum(a, b, ...inputs) {
      let count = a + b;
      for (let i = 0; i < inputs.length; i++) {
            count += inputs[i];
      }
      console.log(count);
}
sum(10, 20, 30, 40, 50, 60, 70, 80);