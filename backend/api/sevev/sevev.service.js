const ObjectId = require('mongodb').ObjectId;
const dbService = require('../../services/db.service');

query = async (filterBy) => {
  const collection = await dbService.getCollection('sevev');
  try {
    const sevevs = await collection.find().toArray();
    return sevevs;
  } catch (err) {
    console.log('Error cannot find sevevs');
    throw err;
  }
};

getById = async (id) => {
  const collection = await dbService.getCollection('sevev');
  try {
    const sevev = await collection.findOne({ _id: ObjectId(id) });
    return sevev;
  } catch (err) {
    console.log(`Error While fetching sevev with id of ${id}`);
    throw err;
  }
};

remove = async (id) => {
  const collection = await dbService.getCollection('sevev');
  try {
    await collection.deleteOne({ _id: ObjectId(id) });
  } catch (err) {
    console.log(`Error While deleteing sevev with id of ${id}`);
    throw err;
  }
};

update = async (sevev) => {
  const collection = await dbService.getCollection('sevev');
  sevev._id = ObjectId(sevev._id);
  try {
    await collection.updateOne({ _id: sevev._id }, { $set: sevev });
    return sevev;
  } catch (err) {
    console.log(`Error While updating sevev with id of ${sevev._id}`);
    throw err;
  }
};

add = async (sevev) => {
  const collection = await dbService.getCollection('sevev');
  try {
    await collection.insertOne(sevev);
    return sevev;
  } catch (err) {
    console.log(`Error While adding sevev`);
    throw err;
  }
};

module.exports = {
  query,
  getById,
  remove,
  add,
  update,
};

function _buildCriteria(filterBy) {
  console.log(filterBy);
  const criteria = {};
  if (filterBy.name) {
    criteria.name = { $regex: `(?i).*${filterBy.name}.*` };
  }
  // if (filterBy.location) {
  //   criteria['location.address'] = { $regex: `(?i).*${filterBy.location}.*` };
  // }
  // if (filterBy.category) {
  //   criteria.category = { $regex: filterBy.category };
  // }
  return criteria;
}
