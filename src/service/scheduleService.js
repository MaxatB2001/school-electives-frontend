import { $authHost } from "../lib/axios";

export default class ScheduleService {
  static async getUserSchedule(date) {
    const {data} = await $authHost.get(`/user/schedule/${date}`)
    return data; 
  }

  static async addHomework(date, body, courseId) {
    const {data}= await $authHost.post(`/course/addHomework/${courseId}`, {
      body,
      date,
    })
    console.log(data);
  }
}