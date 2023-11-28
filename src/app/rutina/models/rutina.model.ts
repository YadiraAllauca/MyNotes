import { Activity } from "./actividad.model";

export class Rutina {
  day: string;
  activities: Activity[];

  constructor(day: string, activities: Activity[]) {
    this.day = day;
    this.activities = activities;
  }
}
