async function fetchCryptoPrices() {
    try {
      const response = await fetch('http://localhost:3000/crypto-prices'); // Changed to use localhost and port 3000
      const data = await response.json();
  
      const bitcoinPrice = data.bitcoin.usd;
      const ethereumPrice = data.ethereum.usd;
  
      // Update HTML elements with new prices
      document.getElementById('bitcoin-price').innerText = `Bitcoin Price: $${bitcoinPrice}`;
      document.getElementById('ethereum-price').innerText = `Ethereum Price: $${ethereumPrice}`;
    } catch (error) {
      console.error('Error fetching crypto prices:', error);
    }
  }
  
  // Fetch prices initially
  fetchCryptoPrices();
  
  // Fetch prices every 15 seconds
  setInterval(fetchCryptoPrices, 15000);