// import storageService from './storageService';
// import db from '../data/sevevDB';

// const KEY = 'sevev';
// var gSevev = null;
// _createCustomers();

// function _createCustomers() {
//   gSevev = storageService.load(KEY);
//   if (gSevev === null) {
//     gSevev = db.getDefaultData();
//     storageService.store(KEY, gSevev);
//   }
// }

// const query = async (filter) => {
//   try {
//     return Promise.resolve(gSevev);
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default {
//   query,
// };

import HttpService from './HttpService';

export default {
  query,
  add,
  remove,
  update,
  getById,
};

function query(filterBy) {
  // var queryStr = `?name=${filterBy.name}&location=${filterBy.location}&category=${filterBy.category}`;

  // return HttpService.get(`sevev${queryStr}`);
  return HttpService.get(`sevev`);
}

function getById(id) {
  return HttpService.get(`sevev/${id}`);
}

function remove(id) {
  return HttpService.delete(`sevev/${id}`);
}

function update(sevev) {
  return HttpService.put(`sevev/${sevev._id}`, sevev);
}

async function add(sevev) {
  const addedsevev = await HttpService.post('sevev/', sevev);
  return addedsevev;
}
