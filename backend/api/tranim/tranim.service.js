const ObjectId = require('mongodb').ObjectId;
const dbService = require('../../services/db.service');

query = async (filterBy) => {
  const collection = await dbService.getCollection('tranim');
  try {
    const tranims = await collection.find().toArray();
    return tranims;
  } catch (err) {
    console.log('Error cannot find tranims');
    throw err;
  }
};

getById = async (id) => {
  const collection = await dbService.getCollection('tranim');
  try {
    const tranim = await collection.findOne({ _id: ObjectId(id) });
    return tranim;
  } catch (err) {
    console.log(`Error While fetching tranim with id of ${id}`);
    throw err;
  }
};

remove = async (id) => {
  const collection = await dbService.getCollection('tranim');
  try {
    await collection.deleteOne({ _id: ObjectId(id) });
  } catch (err) {
    console.log(`Error While deleteing tranim with id of ${id}`);
    throw err;
  }
};

update = async (tranim) => {
  const collection = await dbService.getCollection('tranim');
  tranim._id = ObjectId(tranim._id);
  try {
    await collection.updateOne({ _id: tranim._id }, { $set: tranim });
    return tranim;
  } catch (err) {
    console.log(`Error While updating tranim with id of ${tranim._id}`);
    throw err;
  }
};

add = async (tranim) => {
  const collection = await dbService.getCollection('tranim');
  try {
    await collection.insertOne(tranim);
    return tranim;
  } catch (err) {
    console.log(`Error While adding tranim`);
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
