interface Message {
  me: boolean;
  message: string;
  message_Time: string;
  message_day: string;
  from_name: string;
  is_replay: boolean;
  replay_message: string;
  message_type: string;
}

interface Conversation {
  contactName: string;
  messageHistory: Message[];
  image: string;
  group_name:string
}

interface ConversationListData {
  contactName: string;
  lastMessage: string;
  lastTime: string;
  image: string;
  messageHistory: Message[];
  group_name: string
}

export type { Message, Conversation, ConversationListData }