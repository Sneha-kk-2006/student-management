import { User } from "./models/user.model";
import { Student } from "./models/student.model";
import { Admin } from "./models/admin.model";

const users: User[] = [
  new Student(1, "Sneha", "sneha@gmail.com", "MERN"),
  new Admin(2, "Abhinav", "admin@gmail.com")
];

users.forEach(user => {
  console.log(user.getDetails());
});