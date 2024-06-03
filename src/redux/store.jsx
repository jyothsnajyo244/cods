// redux/store.js
import { createStore, combineReducers } from 'redux';
import procurementReducer from './reducers/procurementReducer';
// Import other reducers...

const rootReducer = combineReducers({
  procurement: procurementReducer,
  // Add other reducers here...
});

const store = createStore(rootReducer);

export default store;
