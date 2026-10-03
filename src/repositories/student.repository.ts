import { Student } from "../models/student.model";
import { IRepository } from "../interfaces/repository.interface";

export class StudentRepository
  implements IRepository<Student> {

  private students: Student[] = [];

  findAll(): Student[] {
    return this.students;
  }

  findById(id: number): Student | undefined {
    return this.students.find(
      student => student.id === id
    );
  }

  create(student: Student): Student {
    this.students.push(student);

    return student;
  }

  update(
    id: number,
    data: Partial<Student>
  ): Student | undefined {

    const student = this.findById(id);

    if (!student) {
      return undefined;
    }

    Object.assign(student, data);

    return student;
  }

  delete(id: number): boolean {

    const index = this.students.findIndex(
      student => student.id === id
    );

    if (index === -1) {
      return false;
    }

    this.students.splice(index, 1);

    return true;
  }
}