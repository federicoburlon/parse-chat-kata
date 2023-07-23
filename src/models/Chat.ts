export enum OutputWriterType {
  AGENT = 'agent',
  CUSTOMER = 'customer'
}

export interface ChatData {
  date: string,
  mention: string,
  sentence: string,
  type: OutputWriterType.AGENT | OutputWriterType.CUSTOMER
}
