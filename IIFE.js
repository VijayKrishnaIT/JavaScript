(() => {
  console.log("Welcome to IIFE !!!");
})(); // Welcome to IIFE !!!

for (var i = 0; i < 5; i++) {
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, 5000);
  })(i);
} //0 1 2 3 4
