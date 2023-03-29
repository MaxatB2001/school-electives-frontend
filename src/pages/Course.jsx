import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import Button from "../components/ui/Button";
import Loader from "../components/ui/Loader";
import { USER_ROUTE, week } from "../data/constants";
import { Context } from "../main";
import CourseService from "../service/courseService";
import { weeksBetween } from "../utils/date";
import { isUserJoined } from "../utils/user";

export const Course = observer(() => {
  const navigate = useNavigate();
  const { course, user } = useContext(Context);
  const { id } = useParams();

  const joinCourseHandler = () => {
    CourseService.joinToCourse(id).then(data => navigate(USER_ROUTE));
  };

  const leaveCourseHandler = () => {
    CourseService.leaveCourse(id).then(data => navigate(USER_ROUTE))
  }

  useEffect(() => {
    course.getCourseById(id);
  }, []);
  if (course.isLoading)
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <div className="h-full w-full max-w-6xl mx-auto">
      <div
        style={{
          backgroundImage: `url(http://localhost:5000/${course.currentCourse?.image})`,
        }}
        className={`h-full w-full relative p-10 bg-center bg-no-repeat bg-cover`}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60"></div>
        <div className="relative space-y-10">
          <h1 className="text-7xl text-white font-arial font-semibold max-w-[70%]">
            {course.currentCourse.name}
          </h1>
          <ul className="flex text-white font-semibold gap-4 flex-wrap">
            <li className="flex max-w-[200px] gap-2">
              <Icon type="calendar" />
              <p>
                {weeksBetween(
                  new Date(course.currentCourse.startDate),
                  new Date(course.currentCourse.endDate)
                )}{" "}
                недели
              </p>
            </li>
            <li className="flex max-w-[200px] gap-2">
              <Icon type="user" className={"text-white"} />
              <p>{`${course.currentCourse.students?.length} человек уже записан на курс`}</p>
            </li>
            <li className="flex max-w-[200px] gap-2">
              <Icon className={"text-white shrink-0"} type="time" />
              <p>{`в ${new Date(
                course.currentCourse?.time
              ).getUTCHours()}:${new Date(
                course.currentCourse?.time
              ).getUTCMinutes()}`}</p>
            </li>
            <li className="flex max-w-[200px] gap-2">
              <Icon className={"text-white shrink-0"} type="days" />
              <p>
                {course.currentCourse.days?.map((d) => week[d - 1]).join(" ")}
              </p>
            </li>
            <li className="flex max-w-[200px] gap-2">
              <Icon className={"text-white shrink-0"} type="audience" />
              <p>{`кабинет ${course.currentCourse.audience}`}</p>
            </li>
          </ul>
          {isUserJoined(user.user.courses, id) ? (
            <Button onClick={leaveCourseHandler} variant={"danger"} size={"lg"}>
              Выйти
            </Button>
          ) : (
            <Button onClick={joinCourseHandler} size={"lg"}>
              Записаться
            </Button>
          )}
        </div>
      </div>
      <div className="p-10">
        <h2 className="text-4xl font-semibold font-arial">О курсе</h2>
        <p className="text-lg font-semibold font-arial py-2 max-w-[70%]">
          {course.currentCourse.about}
        </p>
      </div>
      <div className="p-10 max-w-[70%] flex items-center justify-between">
        <h2 className="text-4xl font-semibold font-arial">Для кого курс</h2>
        <p className="text-lg font-medium">
          {`курс предназначен для учеников ${course.currentCourse.classOriented?.join(
            ", "
          )} классов`}
        </p>
      </div>
      <div className="p-10 space-y-10">
        <h2 className="text-4xl font-semibold font-arial">Преподователь</h2>
        <div className="max-w-[200px]">
          <img
            className="rounded-full object-cover w-full"
            src={`http://localhost:5000/${course.currentCourse.User?.image}`}
            alt="ава учителя"
          />
        </div>
        <p className="underline decoration-gray-500 underline-offset-4 text-lg font-semibold font-arial">
          {course.currentCourse.User?.firstName +
            " " +
            course.currentCourse.User?.lastName}
        </p>
      </div>
    </div>
  );
});
