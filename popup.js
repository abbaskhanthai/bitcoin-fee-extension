function fetchFees() {
  fetch('https://mempool.space/api/v1/fees/recommended')
    .then(response => response.json())
    .then(data => {
      document.getElementById('fast-fee').textContent = data.fastestFee;
      document.getElementById('normal-fee').textContent = data.halfHourFee;
      document.getElementById('slow-fee').textContent = data.hourFee;
      document.getElementById('updated-time').textContent = `⏱ Updated: ${new Date().toLocaleTimeString()}`;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('updated-time').textContent = '⏱ Error fetching data';
    });
}

fetchFees();

document.querySelector('.refresh').addEventListener('click', fetchFees);