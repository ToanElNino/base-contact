import {HistoryModel} from '../reducers/history/historyReducer';
import {TYPE_INCOMING_CALL, TYPE_INCOMING_VIDEO_CALL} from './index';

export const INIT_HISTORY_LIST: HistoryModel[] = [
  {
    phoneNumber: '0974303650',
    name: 'Phạm Thùy Linh',
    contactId: 'gsdfgfsdsdff',
    time: new Date(2023, 2, 18, 23, 50, 40).toString(),
    type: TYPE_INCOMING_CALL,
    note: 'Bạn',
    key: 'mahdfsd',
  },
  {
    phoneNumber: '0974303650',
    name: 'Ngô Thừa Ân',
    contactId: 'gsdfgfsdsdff',
    time: new Date(2023, 2, 17, 23, 50, 40).toString(),
    type: TYPE_INCOMING_VIDEO_CALL,
    note: 'Bạn',
    key: 'mahdfsd1',
  },
  {
    phoneNumber: '0974303650',
    name: 'Bùi Quốc Toàn',
    contactId: 'gsdfgfsdsdff',
    time: new Date(2023, 2, 16, 23, 50, 40).toString(),
    type: TYPE_INCOMING_CALL,
    note: 'Bạn',
    key: 'mahdfs3',
  },
  {
    phoneNumber: '0974303650',
    name: 'Đặng Thành Kiên',
    contactId: 'gsdfgfsdsdff',
    time: new Date(2023, 2, 16, 23, 50, 40).toString(),
    type: TYPE_INCOMING_CALL,
    note: 'Bạn',
    key: 'mahdfsd76',
  },
  {
    phoneNumber: '0974303650',
    name: 'Bùi Việt Phương',
    contactId: 'gsdfgfsdsdff',
    time: new Date(2023, 2, 16, 23, 50, 40).toString(),
    type: TYPE_INCOMING_VIDEO_CALL,
    note: 'Bạn',
    key: 'mahdfs76',
  },
  {
    phoneNumber: '0974303650',
    name: 'Đinh Công Thành',
    contactId: 'gsdfgfsdsdff',
    time: new Date(2023, 2, 15, 23, 50, 40).toString(),
    type: TYPE_INCOMING_VIDEO_CALL,
    note: 'Bạn',
    key: 'mahdfsd456',
  },
];
