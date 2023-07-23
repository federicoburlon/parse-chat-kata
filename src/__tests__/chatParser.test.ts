import {ChatData, WriterType} from "../models/Chat";
import {parseChat} from "../chatParser";

describe('Tests for chat parser', () => {
  it('should cover Step 1 (single sentence)', () => {
    const input = '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    const expected: ChatData[] = [{
      date: '14:24:32',
      mention: '14:24:32 Customer : ',
      sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: WriterType.CUSTOMER
    }]
    const result = parseChat(input)
    expect(result).toStrictEqual(expected)
  });

  it('should cover Step 2 (two sentences)', () => {
    const input = '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.'
    const expected: ChatData[] = [{
      date: '14:24:32',
      mention: '14:24:32 Customer : ',
      sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n',
      type: WriterType.CUSTOMER
    }, {
      date: '14:26:15',
      mention: '14:26:15 Agent : ',
      sentence: 'Aliquam non cursus erat, ut blandit lectus.',
      type: WriterType.AGENT
    }]
    const result = parseChat(input)
    expect(result).toStrictEqual(expected)
  });
})
