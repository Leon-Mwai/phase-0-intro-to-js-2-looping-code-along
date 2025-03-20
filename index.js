// Code your solutions in this file
function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--; // Decrease the number in each iteration
    }
  }
  
  // Example usage:
  countDown(10);
  
  function writeCards(names, event) {
    let messages = []; // Array to store thank-you messages
  
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    return messages; // Return the array of messages
  }
  
  // Example usage:
  console.log(writeCards(["Alice", "Bob", "Charlie"], "birthday"));
  