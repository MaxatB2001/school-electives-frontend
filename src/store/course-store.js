import CourseService from "../service/courseService";
import { makeAutoObservable } from "mobx";

export default class CourseStore {
  isLoading = false;
  error = "";
  courses = [];
  currentCourse = {};
  coursesWithMaterials = [];
  constructor() {
    makeAutoObservable(this);
  }

  get isLoading() {
    return this.isLoading;
  }

  setIsLoading(bool) {
    this.isLoading = bool;
  }

  setError(error) {
    this.error = error;
  }

  get error() {
    return this.error;
  }

  setCourses(courses) {
    this.courses = courses;
  }

  get courses() {
    return this.courses;
  }

  setCurrentCourse(course) {
    this.currentCourse = course;
  }

  get currentCourse() {
    return this.currentCourse;
  }

  setCoursesWithMaterials(courses) {
    this.coursesWithMaterials = courses;
  }

  get coursesWithMaterials() {
    return this.coursesWithMaterials;
  }

  getCourseById(id) {
    this.setIsLoading(true);
    CourseService.getCourseById(id)
      .then((data) => {
        this.setCurrentCourse(data);
      })
      .catch((e) => this.setError("eerr"))
      .finally(() => this.setIsLoading(false));
  }

  getCourses() {
    this.setIsLoading(true);
    CourseService.getCourses()
      .then((data) => {
        this.setCourses(data);
      })
      .catch((e) => this.setError("eerr"))
      .finally(() => this.setIsLoading(false));
  }

  getCoursesWithMaterials() {
    this.setIsLoading(true);
    CourseService.getCoursesWithMaterials()
      .then((data) => {
        this.setCoursesWithMaterials(data);
      })
      .catch((e) => this.setError("eerr"))
      .finally(() => this.setIsLoading(false));
  }

  addCourseMaterial(courseId, body) {
    console.log(courseId);
    this.setIsLoading(true);
    CourseService.addCourseMaterial(courseId, body)
      .then((data) => {
        const newArr = this.coursesWithMaterials.map((c) => {
          if (c.id == courseId) {
            return { ...c, materials: [...c.materials, data.material] };
          }
          return c;
        });
        this.setCoursesWithMaterials(newArr);
      })
      .catch((e) => this.setError("eerr"))
      .finally(() => this.setIsLoading(false));
  }
}
