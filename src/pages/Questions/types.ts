import { Topic } from 'types';

export interface Question {
  id: number;
  description: string;
  answer: string;
  topic_id: number;
  parents?: Topic[];
}
