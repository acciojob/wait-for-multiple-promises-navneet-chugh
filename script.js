//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const outputTable = document.getElementById('output');

  // Function to generate a random delay between 1 and 3 seconds
  function randomDelay() {
    return Math.floor(Math.random() * 3000) + 1000;
  }

  // Create an array of Promises
  const promises = [
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, randomDelay());
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, randomDelay());
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(3);
      }, randomDelay());
    }),
  ];

  // Wait for all Promises to resolve using Promise.all
  Promise.all(promises)
    .then((results) => {
      // Populate the table with the results
      results.forEach((result, index) => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        cell1.textContent = `Promise ${index + 1}`;
        cell2.textContent = `${(result / 1000).toFixed(3)}`;
        row.appendChild(cell1);
        row.appendChild(cell2);
        outputTable.appendChild(row);
      });
    })
    .catch((error) => {
      console.error(error);
    });
});
