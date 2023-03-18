import {configureStore} from '@reduxjs/toolkit';
import contactReducer from '../reducers/contact/contactReducer';
import historyReducer from '../reducers/history/historyReducer';
const store = configureStore({
  reducer: {
    contactReducer: contactReducer,
    historyReducer: historyReducer,
  },
});

export default store;
