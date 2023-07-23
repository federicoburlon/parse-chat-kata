export enum WriterType {
  AGENT = 'Agent',
  CUSTOMER = 'Customer'
}

export interface ChatData {
  date: string,
  mention: string,
  sentence: string,
  type: WriterType.AGENT | WriterType.CUSTOMER
}
