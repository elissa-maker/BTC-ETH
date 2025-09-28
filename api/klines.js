export default async function handler(req, res) {
  const { symbol, interval, limit } = req.query;
  const url = `https://api.mexc.com/api/v3/klines?symbol=${symbol}&interval=${interval}m&limit=${limit || 50}`;
  const response = await fetch(url);
  const data = await response.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}
