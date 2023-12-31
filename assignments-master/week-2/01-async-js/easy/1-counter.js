let count = 0;

function updateCounter() {
  console.log(count);
  count++;
  setTimeout(updateCounter, 1000); // 1000 milliseconds = 1 second
}

// Start the counter
updateCounter();
