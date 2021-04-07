import template from "./template.marko";
import rentals from '../../data/rentals.json';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default (req, res) => {
  rentals.data.forEach(r => {
    const { location: { lat, lng } } = r.attributes;
    const height = 150;
    const width = 150;
    const zoom = 9;

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${process.env.MAPBOX_ACCESS_TOKEN}`;

    r.mapbox = `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  });

  res.marko(template, { rentals: rentals.data });
};
