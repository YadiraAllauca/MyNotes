export class Tareas {
  description: string;
  date: string;
  status: string;

  constructor(description: string, date: string, status: string) {
    this.description = description;
    this.date = date;
    this.status = status;
  }
}
