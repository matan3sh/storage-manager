// import storageService from './storageService';
// import db from '../data/tranimDB';

// const KEY = 'tranim';
// var gTranim = null;
// _createCustomers();

// function _createCustomers() {
//   gTranim = storageService.load(KEY);
//   if (gTranim === null) {
//     gTranim = db.getDefaultData();
//     storageService.store(KEY, gTranim);
//   }
// }

// const query = async (filter) => {
//   let tranims = [];
//   const { location, item } = filter;
//   try {
//     if (filter === '') return Promise.resolve(gTranim);
//     else if (location === '' && item === '') return Promise.resolve(gTranim);
//     else if (location === '' && item !== '') {
//       tranims = gTranim.filter((tranim) =>
//         tranim.items.filter(
//           (currItem) => currItem.type.toString() === item.toString()
//         )
//       );
//     } else if (location !== '' && item === '') {
//       tranims = gTranim.filter(
//         (tranim) => tranim.location.toString() === location.toString()
//       );
//     } else {
//       tranims = gTranim.filter(
//         (tranim) => tranim.location.toString() === location.toString()
//       );
//       tranims = tranims.filter((tranim) =>
//         tranim.items.filter(
//           (currItem) => currItem.type.toString() === item.toString()
//         )
//       );
//     }
//     return Promise.resolve(tranims);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const update = async (tranim) => {
//   try {
//     const index = gTranim.findIndex(
//       (cuurTranim) => cuurTranim.id === tranim.id
//     );
//     gTranim[index] = tranim;
//     storageService.store(KEY, gTranim);
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default {
//   query,
//   update,
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

  // return HttpService.get(`tranim${queryStr}`);
  return HttpService.get(`tranim`);
}

function getById(id) {
  return HttpService.get(`tranim/${id}`);
}

function remove(id) {
  return HttpService.delete(`tranim/${id}`);
}

function update(tranim) {
  return HttpService.put(`tranim/${tranim._id}`, tranim);
}

async function add(tranim) {
  const addedtranim = await HttpService.post('tranim/', tranim);
  return addedtranim;
}
