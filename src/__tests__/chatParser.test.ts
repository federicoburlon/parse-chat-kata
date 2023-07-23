import {ChatData, OutputWriterType} from "../models/Chat";
import {parseChat} from "../chatParser";

describe('Tests for chat parser', () => {
  it('should cover Step 1 (single sentence)', () => {
    const input = '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    const expected: ChatData[] = [{
      date: '14:24:32',
      mention: '14:24:32 Customer : ',
      sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      type: OutputWriterType.CUSTOMER
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
      type: OutputWriterType.CUSTOMER
    }, {
      date: '14:26:15',
      mention: '14:26:15 Agent : ',
      sentence: 'Aliquam non cursus erat, ut blandit lectus.',
      type: OutputWriterType.AGENT
    }]
    const result = parseChat(input)
    expect(result).toStrictEqual(expected)
  });

  it('should cover Step 3 (two customer mentions as start)', () => {
    const input = '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '14:27:00 Customer : Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.\n' +
      '14:27:47 Agent : Vestibulum tempor diam eu leo molestie eleifend.\n' +
      '14:28:28 Customer : Contrary to popular belief, Lorem Ipsum is not simply random text.'
    const expected: ChatData[] = [{
      date: '14:24:32',
      mention: '14:24:32 Customer : ',
      sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n',
      type: OutputWriterType.CUSTOMER
    }, {
      date: '14:27:00',
      mention: '14:27:00 Customer : ',
      sentence: 'Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.\n',
      type: OutputWriterType.CUSTOMER
    }, {
      date: '14:27:47',
      mention: '14:27:47 Agent : ',
      sentence: 'Vestibulum tempor diam eu leo molestie eleifend.\n',
      type: OutputWriterType.AGENT
    }, {
      date: '14:28:28',
      mention: '14:28:28 Customer : ',
      sentence: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      type: OutputWriterType.CUSTOMER
    }]
    const result = parseChat(input)
    expect(result).toStrictEqual(expected)
  });

})
