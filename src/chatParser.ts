import {ChatData, InputWriterType, OutputWriterType} from "./models/Chat";

const stringRegex = /^(Customer|Agent)\s+:\s+(.*\n*)$/;
const dateRegex = /(\d{2}:\d{2}:\d{2})\s+/

export const parseChat = (chat: string): ChatData[] => {
  const chatLines = chat.split(dateRegex)
  chatLines.shift()
  const chatDataArray: ChatData[] = []

  for (let i = 0; i < chatLines.length; i+=2) {
    const date  = chatLines[i]
    const line = chatLines[i+1]

      const match = line.match(stringRegex);

      if (match) {
        const sentence = match[2]
        const type = match[1].includes(InputWriterType.CUSTOMER) ? OutputWriterType.CUSTOMER : OutputWriterType.AGENT;
        const mention = `${date} ${line.replace(sentence, '')}`
        const chatData: ChatData = {
          mention,
          date,
          type,
          sentence,
        }

        console.log(chatData, 'chatData found!')
        chatDataArray.push(chatData);

      } else {
        console.error('We should never end up here hopefully')
      }
    }
  return chatDataArray
}
