import { Student } from "../models/student.model";
import { IStudentService } from "../interfaces/service.interface";
import { IRepository } from "../interfaces/repository.interface";
import {} from "../utils/validation";

export class StudentService
  implements IStudentService {

  constructor(
    private studentRepository: IRepository<Student>
  ) {}

  getAllStudents(): Student[] {

    return this.studentRepository.findAll();
  }

  getStudentById(
    id: number
  ): Student | undefined {

    return this.studentRepository.findById(id);
  }

  createStudent(
    student: Student
  ): Student {

    if (!isValidName(student.name)) {
      throw new Error("Invalid student name");
    }

    if (!isValidEmail(student.email)) {
      throw new Error("Invalid email");
    }

    return this.studentRepository.create(student);
  }

  updateStudent(
    id: number,
    data: Partial<Student>
  ): Student | undefined {

    return this.studentRepository.update(
      id,
      data
    );
  }

  deleteStudent(
    id: number
  ): boolean {

    return this.studentRepository.delete(id);
  }
}