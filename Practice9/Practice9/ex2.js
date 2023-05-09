const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function getNthNumInNBonacci(n, m) {
    let sequence = new Array(n).fill(0);
    sequence.push(1);  // The first non-zero value is at n+1 position
  
    for(let i = n+1; i < m; i++) {
      sequence[i] = sequence.slice(i-n, i).reduce((a, b) => a + b);
    }
  
    return sequence[m-1];
  }
  
  function run() {
    readline.question('Enter N and M: ', input => {
      let [n, m] = input.split(' ').map(Number);
      
      if (n === 0 && m === 0) {
        readline.close();
      } else if (n > 1 && n <= 20 && m >= 1 && m <= 50) {
        console.log(getNthNumInNBonacci(n, m));
        run();
      } else {
        console.log('Invalid input, please enter again');
        run();
      }
    });
  }
  
  run();
  