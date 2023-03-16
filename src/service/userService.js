import { $authHost } from "../lib/axios";

export default class UserService {
  static async getJournal(courseId, classNumber, classLetter) {
    const { data } = await $authHost.get(`/user/journal/${courseId}`, {
      params: {
        classNumber,
        classLetter,
      }
    });
    return data;
  }

  static async getStudentGrades() {
    const { data } = await $authHost.get("/user/getStudentGrades");
    return data;
  }
}
