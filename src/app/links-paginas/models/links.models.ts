export class Link {
  pageName: string;
  title: string;
  link: string;
  comment: string;

  constructor(pageName: string, title: string, link: string, comment: string) {
    this.pageName = pageName;
    this.title = title;
    this.link = link;
    this.comment = comment;
  }
}
