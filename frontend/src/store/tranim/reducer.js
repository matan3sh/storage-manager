const initialState = {
  tranims: null,
  tranim: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TRANIMS':
      return {
        ...state,
        tranims: action.payload,
      };
    case 'UPDATE_TRANIMS':
      return {
        ...state,
        tranims: state.tranims.map((tranim) =>
          tranim._id === action.payload._id ? action.payload : tranim
        ),
        tranim: action.payload,
      };
    case 'SET_TRANIM':
      return {
        ...state,
        tranim: action.payload,
      };
    default:
      return state;
  }
}
