export class User {
    _id: string;
    authdata?: any;
    pseudo: string;
    role = new Array<string>();
    email?: string;
    password: string;
  }