import {createSlice} from '@reduxjs/toolkit';

interface ContactModel {
  phoneNumber: any;
  email: any;
  address: any;
  birthday: any;
  familyName: any;
  firstName: any;
  company: any;
}
const initialState: {count: number; contactList: ContactModel[]} = {
  count: 0,
  contactList: [],
};

const contactSlice = createSlice({
  initialState,
  name: 'contact list',
  reducers: {
    addContact: (state, action) => {
      state.count++;
      // let {phoneNumber, firstName, familyName, email, address, birthday, company } = action.payload;
      // const newContact: { firstName: any; phoneNumber: any; familyName: any } = {
      //   phoneNumber,
      //   firstName,
      //   familyName,
      //   email,
      //   address,
      //   birthday,
      //   company,
      // };
      // state.contactList.unshift(newContact);
    },
    // deleteContact: (state, action) => {
    //   state.tasks = state.tasks.filter(task => task.id !== action.payload);
    // },
    // editContact: (state, action) => {
    //   let {id, title} = action.payload;
    //   state.tasks = state.tasks.map(task => {
    //     if (task.id === id) {
    //       task.title = title;
    //     }
    //     return task;
    //   });
    // }
  },
});
//reducer
const contactReducer = contactSlice.reducer;

export const todoSelector = (state: {contactReducer: {contactList: any}}) =>
  state.contactReducer.contactList;

// Action
export const {addContact} = contactSlice.actions;

export default contactReducer;
