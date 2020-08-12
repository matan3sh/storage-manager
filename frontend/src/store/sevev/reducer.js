const initialState = {
  sevevs: null,
  zelem: null,
  makam: null,
  aviv: null,
  netzYarok: null,
  sevev: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SEVEVS':
      return {
        ...state,
        sevevs: action.payload,
        zelem: action.payload.filter((item) => item.type === 'צל״ם'),
        makam: action.payload.filter((item) => item.type === 'מכ״ם'),
        aviv: action.payload.filter((item) => item.type === 'אביב'),
        netzYarok: action.payload.filter((item) => item.type === 'נץ ירוק'),
      };
    case 'UPDATE_SEVEVS':
      return {
        ...state,
        sevevs: state.sevevs.map((sevev) =>
          sevev._id === action.payload._id ? action.payload : sevev
        ),
        sevev: action.payload,
      };
    case 'SET_SEVEV':
      return {
        ...state,
        sevev: action.payload,
      };
    case 'ADD_SEVEV':
      return {
        ...state,
        sevevs: [action.payload, ...state.sevevs],
      };
    default:
      return state;
  }
}
