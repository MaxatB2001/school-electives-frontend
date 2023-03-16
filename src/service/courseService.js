import { $authHost, $host } from "../lib/axios";

export default class CourseService {
  static async getCourseById(id) {
    const { data } = await $authHost.get(`/course/${id}`);
    return data;
  }

  static updateGrade(gradeId, grade) {
    $authHost.post(`/course/updateGrade/${gradeId}`, {
      grade,
    });
  }

  static async getCoursesWithMaterials() {
    const { data } = await $authHost.get("/course/getCoursesWithMaterials");
    return data;
  }

  static async addCourseMaterial(courseId, body) {
    console.log(courseId);
    const { data } = await $authHost.post(
      `/course/addMaterial/${courseId}`,
      body
    );
    return data;
  }

  static addCourse(body) {
    $authHost.post("course/create", body).then((data) => console.log(data));
  }

  static async getCourses() {
    const { data } = await $host.get("/course/getCourses");
    console.log(data);
    return data;
  }

  static async joinToCourse(courseId) {
    const {data} = $authHost.post(`/course/joinToCourse/${courseId}`)
    return data;
  }

  static async leaveCourse(courseId) {
    const {data} = $authHost.post(`/course/leaveCourse/${courseId}`)
    return data;
  }
}
