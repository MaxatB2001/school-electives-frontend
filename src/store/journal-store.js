import { makeAutoObservable } from "mobx";
import UserService from "../service/userService";

export default class JournalStore {
  isLoading = false;
  error = "";
  journal = {};
  studentGrades = {};
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

  setJournal(journal) {
    this.journal = journal;
  }

  get journal() {
    return this.journal;
  }

  setStudentGrades(studentGrades) {
    this.studentGrades = studentGrades;
  }

  get studentGrades() {
    return this.studentGrades;
  }

  getJournal(courseId, classNumber, classLetter) {
    this.setIsLoading(true);
    UserService.getJournal(courseId, classNumber, classLetter)
      .then((data) => {
        this.setJournal(data)
      })
      .catch((e) => this.setError("eerr"))
      .finally(() => this.setIsLoading(false));
  }

  getStudentGrades() {
    this.setIsLoading(true);
    UserService.getStudentGrades()
      .then((data) => {
        this.setStudentGrades(data)
      })
      .catch((e) => this.setError("eerr"))
      .finally(() => this.setIsLoading(false));
  }
}
