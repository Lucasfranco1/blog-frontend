export class PostPayload{
    id: string;
    content: string;
    title: string;
    username: string;
    constructor(title:string, content:string, username:string){
      this.title = title;
      this.content = content;
      this.username = username;

    }
  }