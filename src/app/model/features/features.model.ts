import { Guid } from "guid-typescript";

export class AccessLevel {
  constructor() {
    this.id = 0;
    this.uid = Guid.create().toString();
    this.days = [];
    this.stages = [];
  }
  id: number;
  uid: string;
  eventUid: string;
  name: string;
  days: [];
  stages: [];
}

export class Day {
  id: number;
  uid: string;
  index: number;
  eventUid: string;
  name: string;
  eventDate: Date;
}

export class Stage {
  id: number;
  uid: string;
  eventUid: string;
  name: string;
}
