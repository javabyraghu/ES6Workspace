function random() {
      return 500;
}
function add(a, b = random(), c) {
      let count = a + b + c;
      console.log(count);
}
add(10, undefined , 20);
//add(10, 20);
//add(10, 20, 30);