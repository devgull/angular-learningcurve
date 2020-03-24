import { Injectable } from '@angular/core';
import { AccessLevel, Day, Stage } from '../model/features/features.model';

@Injectable()
export class MoqService{
  public getRandomDays(count: number):Day[]{
    let days: Day[] = [];
    for(let i = 0; i < count - 1; i++){
      let day = new Day();
      day.id = i+1;
      day.index = i;
      day.name = "day name: " + (i +1);
      day.eventDate = new Date();
      days.push(day);
    }
    return days;
  }

  public getRandomNumber(range: Range): number{
    let rand = Math.floor(Math.random() * 200) - 100;
    return 0;
  }
}