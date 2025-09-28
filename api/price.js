export default async function handler(req, res) {
  const { symbol } = req.query;
  const url = `https://api.mexc.com/api/v3/ticker/price?symbol=${symbol}`;
  const response = await fetch(url);
  const data = await response.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}
