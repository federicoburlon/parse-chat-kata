import {ChatData, WriterType} from "./models/Chat";

export const parseChat = (chat: string): ChatData[] => {
  return [{
    date: '14:24:32',
    mention: '14:24:32 Customer : ',
    sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: WriterType.CUSTOMER
  }]
}
