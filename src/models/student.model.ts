import { User } from "./user.model";

export class Student extends User {

  private marks: number = 0;

  constructor(
    id: number,
    name: string,
    email: string,
    public course: string
  ) {
    super(id, name, email);
  }

  addMarks(mark: number): void {

    if (mark < 0 || mark > 100) {
      throw new Error("Marks must be between 0 and 100");
    }

    this.marks = mark;
  }

  getMarks(): number {
    return this.marks;
  }

  getRole(): string {
    return "Student";
  }

  override getDetails(): string {
    return `${this.name} - ${this.email} - ${this.course}`;
  }
}