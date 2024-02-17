export interface Exam {
  date: string;
  courseName: string;
  timeCode: string;
}

export interface SeatingInfo {
  courseName: string;
  blockId: string;
  floor: number;
  roomName: string;
  roomId: string;
  seatNumber: number;
  student?: {
    name?: string;
    id?: bigint;
  };
}
