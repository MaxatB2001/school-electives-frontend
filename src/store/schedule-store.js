import { makeAutoObservable } from "mobx";
import ScheduleService from "../service/scheduleService";

export default class SchedultStore {
  isLoading = false;
  error = "";
  schedule = [];
  constructor() {
    makeAutoObservable(this);
  }

  setSchedule(schedule) {
    this.schedule = schedule;
  }

  get schedule() {
    return this.schedule;
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

  addHomework() {
    
  }

  getUserSchedule(date) {
    this.setIsLoading(true);
    ScheduleService.getUserSchedule(date)
      .then((data) => {
        this.setSchedule(data)
      })
      .catch((e) => this.setError("eerr"))
      .finally(() => this.setIsLoading(false));
  }
}