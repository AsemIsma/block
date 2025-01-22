// Global scope
const B = 'asem';

function name () {
    
    console.log('My name is ' + B);
}
name()

// Function scope
function name () {
    const N = 'asem';
    console.log('My name is ' + N);
}
name()

// console.log('My name is ' + N); error not defined

// Block scope
if(10 > 5) {
  console.log('My name is ' + B);
  // console.log('My name is ' + N); error not defined
  const A = 'asem';
  console.log('My name is ' + A);
}
// console.log('My name is ' + A); error not defined
