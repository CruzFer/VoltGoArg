export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const apiKey = process.env.OPENCHARGEMAP_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'Falta configurar OPENCHARGEMAP_API_KEY en las variables de entorno de Vercel.'
    });
  }

  try {
    const url = new URL('https://api.openchargemap.io/v3/poi/');
    url.search = new URLSearchParams({
      output: 'json',
      countrycode: 'AR',
      maxresults: '5000',
      compact: 'false',
      verbose: 'false',
      key: apiKey,
      client: 'VoltGoArgentina'
    }).toString();

    const response = await fetch(url, {
      headers: { 'User-Agent': 'VoltGoArgentina/1.0' }
    });
    if (!response.ok) {
      return res.status(response.status).json({ error: 'El directorio de estaciones respondió con un error. Intentá más tarde.' });
    }
    const data = await response.json();
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(502).json({ error: 'No se pudo conectar con el directorio de estaciones.' });
  }
}
