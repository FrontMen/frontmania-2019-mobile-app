export interface Config {
  eventInfo: string;
}

export interface Question {
  question: string;
  answer: string;
}

export interface Image {
  url: string;
}

export interface Room {
  id: string;
  name: string;
}

export interface Speaker {
  id: string;
  name: string;
  email: string;
  avatar: Image | null;
  cover: Image | null;
  bio: string;
  twitter: string;
}

export interface Tag {
  name: string;
}

export interface Talk {
  id: string;
  title: string;
  description: string;
  startsAt: Date;
  endsAt: Date;
  cover: Image | null;
  room: Room;
  speakers: Speaker[];
  tags: Tag[];
}
