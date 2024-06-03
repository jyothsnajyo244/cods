// redux/reducers/procurementReducer.js
const initialState = {
    procurements: [],
  };
  
  const procurementReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_PROCUREMENT':
        return {
          ...state,
          procurements: [...state.procurements, action.payload],
        };
      // Other cases for procurement actions...
      default:
        return state;
    }
  };
  
  export default procurementReducer;
  