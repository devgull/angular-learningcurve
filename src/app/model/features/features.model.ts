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