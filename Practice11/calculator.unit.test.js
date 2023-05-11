const { clearScreen, display, calculate } = require('./scripts');

// Set up a mock HTML document for testing
document.body.innerHTML = `
  <input class="display-box" type="text" id="result" disabled />
`;

// Testing clearScreen function
test('clearScreen function should clear the display', () => {
  document.getElementById("result").value = "123";
  clearScreen();
  expect(document.getElementById("result").value).toBe("");
});

// Testing display function
test('display function should add value to the display', () => {
  display('5');
  expect(document.getElementById("result").value).toBe('5');
});

// Testing calculate function
test('calculate function should evaluate the expression', () => {
  document.getElementById("result").value = "2+3";
  calculate();
  expect(document.getElementById("result").value).toBe('5');
});
// Testing calculate function for addition
test('calculate function should evaluate the addition expression', () => {
    document.getElementById("result").value = "2+3";
    calculate();
    expect(document.getElementById("result").value).toBe('5');
});
// Testing calculate function for subtraction
test('calculate function should evaluate the subtraction expression', () => {
    document.getElementById("result").value = "7-2";
    calculate();
    expect(document.getElementById("result").value).toBe('5');
});
// Testing calculate function for multiplication
test('calculate function should evaluate the multiplication expression', () => {
    document.getElementById("result").value = "5*3";
    calculate();
    expect(document.getElementById("result").value).toBe('15');
});
  
  // Testing calculate function for division
  test('calculate function should evaluate the division expression', () => {
    document.getElementById("result").value = "15/3";
    calculate();
    expect(document.getElementById("result").value).toBe('5');
});
// Testing calculate function for decimal numbers
test('calculate function should evaluate the expression with decimal numbers', () => {
    document.getElementById("result").value = "2.5+2.5";
    calculate();
    expect(document.getElementById("result").value).toBe('5');
  });