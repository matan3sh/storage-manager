const tranimService = require('./tranim.service');

getTranim = async (req, res) => {
  const tranim = await tranimService.getById(req.params.id);
  res.send(tranim);
};

getTranims = async (req, res) => {
  const tranims = await tranimService.query(req.query);
  res.send(tranims);
};

addTranim = async (req, res) => {
  let tranim = req.body;
  tranim = await tranimService.add(tranim);
  res.send(tranim);
};

updateTranim = async (req, res) => {
  const tranim = req.body;
  await tranimService.update(tranim);
  res.send(tranim);
};

deleteTranim = async (req, res) => {
  await tranimService.remove(req.params.id);
  res.end();
};

module.exports = {
  getTranim,
  getTranims,
  addTranim,
  updateTranim,
  deleteTranim,
};
