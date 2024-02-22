import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';


const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(cors());

app.get('/crypto-prices', async (req, res) => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
