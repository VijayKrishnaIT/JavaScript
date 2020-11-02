function* fun_one() {
  yield 10;
  yield 20;
  yield 30;
  yield 40;
  yield 50;
}
let cursor = fun_one();
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());

function* fun_one() {
  yield "ReactJS";
  yield* fun_two();
  yield "MongoDB";
}
function* fun_two() {
  yield "NodeJS";
}
let cursor = fun_one();
for (let i = 0; i < 3; i++) {
  console.log(cursor.next());
}

function* fun_one() {
  yield "Hello_1";
  yield "Hello_2";
  yield "Hello_3";
  return "Bye";
  yield "Hello_4";
}
let cursor = fun_one();
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());

function* fun_one() {
  yield fun_two();
  return "Hello";
}
function fun_two() {
  return "Hello";
}
let cursor = fun_one();
console.log(cursor.next());
console.log(cursor.next());
