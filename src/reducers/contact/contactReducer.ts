import {createSlice} from '@reduxjs/toolkit';

interface ContactModel {
  phoneNumber: string;
  name: string;
}
const initialState = {
  count: 0,
  contactList: ContactModel[],
};


const contactSlice = createSlice({
  name: 'contact list',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.count++;
      let {phoneNumber, name} = action.payload;
      const newContact: ContactModel = {
        phoneNumber: phoneNumber,
        name: name,
      };
      state.contactList.unshift(newContact);
    },
    deleteContact: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    editContact: (state, action) => {
      let {id, title} = action.payload;
      state.tasks = state.tasks.map(task => {
        if (task.id === id) {
          task.title = title;
        }
        return task;
      });
    },
    // deleteAllTask: (state, action) => {
    //   return initialState;
    // },
  },
});
//reducer
const contactReducer = contactSlice.reducer;

export const todoSelector = (state: {contactReducer: {tasks: any}}) =>
  state.contactReducer.tasks;

// Action
export const {addContact, deleteContact, editContact} = contactSlice.actions;

export default contactReducer;
