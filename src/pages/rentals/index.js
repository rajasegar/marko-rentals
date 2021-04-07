import template from './template';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default async (req, res) => {
  const { id } = req.params;
  const data = await import(`../../data/rentals/${id}.json`);

  const { location: { lat, lng } } = data;
  const width = 894;
  const height = 600;
  const zoom = 12;

  let coordinates = `${lng},${lat},${zoom}`;
  let dimensions = `${width}x${height}`;
  let accessToken = `access_token=${process.env.MAPBOX_ACCESS_TOKEN}`;

  data.mapbox = `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;

  res.marko(template, { rental: data });
};
