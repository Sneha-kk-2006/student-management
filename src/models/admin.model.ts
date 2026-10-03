import { User } from "./user.model";

export class Admin extends User {

  constructor(
    id: number,
    name: string,
    email: string
  ) {
    super(id, name, email);
  }

  getRole(): string {
    return "Admin";
  }

  override getDetails(): string {
    return `Admin: ${this.name} - ${this.email}`;
  }
}