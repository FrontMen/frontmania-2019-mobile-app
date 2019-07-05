export interface Room {
  id: string;
  name: string;
}

export interface Speaker {
  id: string;
  name: string;
  email: string;
  avatar: null;
  cover: null;
  bio: string;
}

export interface Talk {
  id: string;
  title: string;
  description: string;
  startsAt: Date;
  endsAt: Date;
  cover: null;
  room: Room;
  speaker: Speaker;
}
