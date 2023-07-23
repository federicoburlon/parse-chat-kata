import {ChatData, InputWriterType, OutputWriterType} from "./models/Chat";

const regex = /^(\d{2}:\d{2}:\d{2})\s+(?:Customer|Agent)\s+:\s+(.*)$/;

export const parseChat = (chat: string): ChatData[] => {
  const chatLines = chat.split('\n')
  const chatDataArray: ChatData[] = []

  let lineNumber = 1
  let isLastLine = false
  chatLines.forEach( line => {

      isLastLine = lineNumber == chatLines.length

      const match = line.match(regex);

      if (match) {
        const sentence = match[2]
        const mention = line.replace(sentence, '')
        const date = match[1]
        const type = mention.includes(InputWriterType.CUSTOMER) ? OutputWriterType.CUSTOMER : OutputWriterType.AGENT;
        const chatData: ChatData = {
          mention,
          date,
          type,
          sentence: isLastLine ? sentence : `${sentence}\n`
        }

        console.log(chatData, 'chatData found!')
        chatDataArray.push(chatData);

      } else {
        console.error('We should never end up here hopefully')
      }
    lineNumber++
    })
  return chatDataArray
}
