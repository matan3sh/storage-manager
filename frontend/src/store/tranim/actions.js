import tranimService from '../../services/tranimService';

export const loadTranims = (filter = '') => async (dispatch) => {
  try {
    let res = await tranimService.query(filter);
    if (filter === '' || filter.location === '')
      dispatch({ type: 'SET_TRANIMS', payload: res });
    else {
      res = res.filter(
        (item) => item.location.toString() === filter.location.toString()
      );
      dispatch({ type: 'SET_TRANIMS', payload: res });
    }
  } catch (err) {
    console.log(err);
  }
};

export const setTranim = (tranim) => async (dispatch) => {
  try {
    dispatch({ type: 'SET_TRANIM', payload: tranim });
  } catch (err) {
    console.log(err);
  }
};

export const updateTranims = (tranim) => async (dispatch) => {
  try {
    tranimService.update(tranim);
    dispatch({ type: 'UPDATE_TRANIMS', payload: tranim });
  } catch (err) {
    console.log(err);
  }
};
