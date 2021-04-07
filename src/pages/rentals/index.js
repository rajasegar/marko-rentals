import template from './template';

export default async (req, res) => {
  const { id } = req.params;
  const data = await import(`../../data/rentals/${id}.json`);
  res.marko(template, { rental: data });
};
