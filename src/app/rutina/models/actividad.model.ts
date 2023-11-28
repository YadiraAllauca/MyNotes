export class Activity {
  hour: string;
  activity: string;
  done: string;

  constructor(hour: string, activity: string, done: string) {
    this.hour = hour;
    this.activity = activity;
    this.done = done;
  }
}
