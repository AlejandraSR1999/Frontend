const readline = require('readline');

function calculateCombinations(price) {
  const denominations = [1, 2, 5, 10, 20, 50, 100, 200];
  const combinations = Array(price + 1).fill(0);
  combinations[0] = 1;

  for (let i = 0; i < denominations.length; i++) {
    for (let j = denominations[i]; j <= price; j++) {
      combinations[j] += combinations[j - denominations[i]];
    }
  }

  return combinations[price];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getTicketPrice = () => {
  rl.question('Enter the ticket price:', (price) => {
    if(price == 0) {
      rl.close();
    } else {
      console.log(calculateCombinations(parseInt(price)));
      getTicketPrice();
    }
  });
};

getTicketPrice();

  

