interface Topic {
  id: number;
  name: string;
}

interface Question {
  id: number;
  topic_id: number;
  description: string;
  answer: string;
}

interface Message {
  id?: number;
  text: string;
  questions?: Question[];
  side: 'left' | 'right';
  topics?: Topic[];
  askUseful?: boolean;
}

interface TopicsTree {
  id: number;
  name: string;
  questions: Question[];
  children: TopicsTree[];
}

interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
}

export type { Message, Question, Topic, TopicsTree, User };
