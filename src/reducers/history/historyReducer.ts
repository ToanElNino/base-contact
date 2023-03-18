import {createSlice} from '@reduxjs/toolkit';
import {INIT_HISTORY_LIST} from '../../constant/HISTORY_DATA_MOCK';
// import { INIT_CONTACT_LIST } from "../../constant/CONTACT_DATA_MOCK";

export interface HistoryModel {
  phoneNumber: string | null;
  name: string | null;
  contactId: string;
  time: string;
  type: number;
  note: string | null;
  key: string;
}
const initialState: {count: number; historyList: HistoryModel[]} = {
  count: 0,
  historyList: INIT_HISTORY_LIST,
};

const historySlice = createSlice({
  initialState,
  name: 'history list',
  reducers: {
    addHistory: (state, action) => {
      console.log('action: ', action);
      state.count++;
      let {phoneNumber, name, contactId, time, type, note, key} =
        action.payload;
      const newHistory: HistoryModel = {
        phoneNumber,
        name,
        contactId,
        time,
        type,
        note,
        key,
      };
      state.historyList.unshift(newHistory);
      return state;
    },
    // deleteHistory: (state, action) => {
    //   console.log('action: ', action);
    //   state.count++;
    //   let {phoneNumber, name, contactId, time, type, note} = action.payload;
    //   const newHistory: HistoryModel = {
    //     phoneNumber,
    //     name,
    //     contactId,
    //     time,
    //     type,
    //     note,
    //   };
    //   state.historyList.unshift(newHistory);
    //   return state;
    // },
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
const historyReducer = historySlice.reducer;

export const historySelector = (state: {historyReducer: {historyList: any}}) =>
  state.historyReducer.historyList;

// Action
export const {addHistory} = historySlice.actions;

export default historyReducer;
