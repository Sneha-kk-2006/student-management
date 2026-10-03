import { Student } from "../models/student.model";
import { StudentService } from "../services/student.service";

export class StudentController {

  constructor(
    private studentService: StudentService
  ) {}

  createStudent(
    id: number,
    name: string,
    email: string,
    course: string
  ): Student {

    const student = new Student(
      id,
      name,
      email,
      course
    );

    return this.studentService.createStudent(
      student
    );
  }

  getStudents(): Student[] {

    return this.studentService.getAllStudents();
  }

  getStudent(
    id: number
  ): Student | undefined {

    return this.studentService.getStudentById(id);
  }

  updateStudent(
    id: number,
    data: Partial<Student>
  ): Student | undefined {

    return this.studentService.updateStudent(
      id,
      data
    );
  }

  deleteStudent(id: number): boolean {

    return this.studentService.deleteStudent(
      id
    );
  }
}