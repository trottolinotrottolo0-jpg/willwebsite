
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export enum Section {
  HERO = 'hero',
  STORY = 'story',
  SERVICES = 'services',
  METHODOLOGY = 'methodology',
  CONTACT = 'contact'
}
