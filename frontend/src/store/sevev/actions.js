import sevevService from '../../services/sevevService';

export const loadSevevs = (filter = '') => async (dispatch) => {
  try {
    let res = await sevevService.query(filter);
    dispatch({ type: 'SET_SEVEVS', payload: res });
  } catch (err) {
    console.log(err);
  }
};

export const setSevev = (sevev) => async (dispatch) => {
  try {
    dispatch({ type: 'SET_SEVEV', payload: sevev });
  } catch (err) {
    console.log(err);
  }
};

export const updateSevevs = (sevev) => async (dispatch) => {
  try {
    sevevService.update(sevev);
    dispatch({ type: 'UPDATE_SEVEVS', payload: sevev });
  } catch (err) {
    console.log(err);
  }
};

export const addSevev = (sevev) => async (dispatch) => {
  try {
    sevevService.add(sevev);
    dispatch({ type: 'ADD_SEVEV', payload: sevev });
  } catch (err) {
    console.log(err);
  }
};
