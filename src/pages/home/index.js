import template from "./template.marko";
import rentals from '../../data/rentals.json';

export default (req, res) => {
  res.marko(template, { rentals: rentals.data });
};
