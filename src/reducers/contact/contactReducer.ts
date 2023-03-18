import {createSlice} from '@reduxjs/toolkit';
import {INIT_CONTACT_LIST} from '../../constant/CONTACT_DATA_MOCK';

export interface ContactModel {
  key: string;
  value: string;
  phoneList: Array<string>;
  emailList: Array<string> | null;
  addressList: Array<string> | null;
  birthdayList: any;
  familyName: string | null;
  firstName: string;
  company: string | null;
}
const initialState: {count: number; contactList: ContactModel[]} = {
  count: 0,
  contactList: INIT_CONTACT_LIST,
};

const contactSlice = createSlice({
  initialState,
  name: 'contact list',
  reducers: {
    addContact: (state, action) => {
      console.log('action: ', action);
      state.count++;
      let {
        phoneList,
        firstName,
        familyName,
        emailList,
        addressList,
        birthdayList,
        company,
        key,
      } = action.payload;
      const newContact: ContactModel = {
        phoneList,
        firstName,
        familyName,
        emailList,
        addressList,
        birthdayList,
        company,
        value: firstName,
        key,
      };
      state.contactList.unshift(newContact);
      return state;
    },
    editContact: (state, action) => {
      console.log('action: ', action);
      // state.count++;
      let {
        phoneList,
        firstName,
        familyName,
        emailList,
        addressList,
        birthdayList,
        company,
        key,
      } = action.payload;
      const updateContact: ContactModel = {
        phoneList,
        firstName,
        familyName,
        emailList,
        addressList,
        birthdayList,
        company,
        value: firstName,
        key,
      };
      console.log('updateContact: ', updateContact);
      let updateContactList = state.contactList.map(e => {
        if (e.key === action.payload.key) {
          // console.log("matching key");
          return updateContact;
        } else {
          return e;
        }
      });
      console.log('update: ', updateContactList);
      // state.contactList.unshift(newContact);
      state.contactList = updateContactList;
      return state;
    },
    getContactByKey: (state, action) => {
      let result = state.contactList.find(e => e.key == action.payload.key);
      console.log(result);
      // return state;
    },
    deleteContact: (state, action) => {
      console.log('delete action');
      const {key} = action.payload;
      console.log('key: ', key);
      let updateContactList = state.contactList.filter(e => e.key !== key);
      state.count--;
      state.contactList = updateContactList;
      return state;
    },
  },
});
//reducer
const contactReducer = contactSlice.reducer;

export const contactSelector = (state: {contactReducer: {contactList: any}}) =>
  state.contactReducer.contactList;

// Action
export const {addContact, editContact, getContactByKey, deleteContact} =
  contactSlice.actions;

export default contactReducer;
