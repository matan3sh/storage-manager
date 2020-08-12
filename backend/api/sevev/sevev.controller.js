const sevevService = require('./sevev.service');

getSevev = async (req, res) => {
  const sevev = await sevevService.getById(req.params.id);
  res.send(sevev);
};

getSevevs = async (req, res) => {
  const sevevs = await sevevService.query(req.query);
  res.send(sevevs);
};

addSevev = async (req, res) => {
  let sevev = req.body;
  sevev = await sevevService.add(sevev);
  res.send(sevev);
};

updateSevev = async (req, res) => {
  const sevev = req.body;
  await sevevService.update(sevev);
  res.send(sevev);
};

deleteSevev = async (req, res) => {
  await sevevService.remove(req.params.id);
  res.end();
};

module.exports = {
  getSevev,
  getSevevs,
  addSevev,
  updateSevev,
  deleteSevev,
};
