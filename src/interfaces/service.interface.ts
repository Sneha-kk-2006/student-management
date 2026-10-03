import { Student } from "../models/student.model";

export interface IStudentService {

  getAllStudents(): Student[];

  getStudentById(
    id: number
  ): Student | undefined;

  createStudent(
    student: Student
  ): Student;

  updateStudent(
    id: number,
    data: Partial<Student>
  ): Student | undefined;

  deleteStudent(
    id: number
  ): boolean;
}