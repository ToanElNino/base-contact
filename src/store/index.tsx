import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../reducers/contact/contactReducer';
const store = configureStore({
  reducer: {
    contactReducer: contactReducer,
  },
});

export default store;
