export class Usuario {
  _id?: String;
  nickname: String;
  password: String;
  constructor(nickname: String, password: String) {
    this.nickname = nickname;
    this.password = password;
  }
}
