import { COURSES_ROUTE, COURSE_ROUTE, LOGIN_ROUTE, USER_ROUTE } from "./constants";
import { Course, Courses, Login, User } from "../pages/index";
export const authRoutes = [
  {
    path: `${USER_ROUTE}`,
    component: User,
  },
  {
    path: `${COURSE_ROUTE}/:id`,
    component: Course,
  },
  {
    path: COURSES_ROUTE,
    component: Courses
  },

];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    component: Login,
  },
];
