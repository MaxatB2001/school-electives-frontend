import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { useInput } from "../hooks/useInput";
import { Context } from "../main";
import ScheduleService from "../service/scheduleService";
import Icon from "./Icon";

const DayOfWeekItem = observer(({ course, date }) => {
  const d = new Date(course.time);
  const { user } = useContext(Context);
  const homeworkInput = useInput("");
  const [writableHomework, setWritableHomework] = useState(false);
  const addHomeworkHandler = async (e) => {
    e.stopPropagation();
    await ScheduleService.addHomework(date, homeworkInput.value, course.id);
    course.homework.push({ body: homeworkInput.value });
    setWritableHomework(false);
  };
  const closeWritingHomeworkHandler = (e) => {
    e.stopPropagation();
    setWritableHomework(false);
  };

  return (
    <tr className="bg-blue-600 border-b border-blue-400">
      <th
        scope="row"
        className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100"
      >
        {d.getUTCHours() +
          ":" +
          (d.getMinutes() < 10 ? "0" : "") +
          d.getMinutes()}
      </th>
      <td className="px-6 py-4 font-medium">{course.name}</td>
      <td
        onClick={
          user.user.type === "teacher" ? () => setWritableHomework(true) : null
        }
        className="px-6 py-4 bg-blue-500"
      >
        {user.user.type === "teacher" && writableHomework ? (
          <div className="w-full h-full flex gap-1 items-center">
            <input
              className="bg-blue-400 rounded-md w-full h-full focus:outline-0 p-1"
              {...homeworkInput}
            />
            <button onClick={addHomeworkHandler}>
              <Icon type={"check-mark"} />
            </button>
            <button onClick={closeWritingHomeworkHandler}>
              <Icon className={"fill-red-700"} type={"close"} />
            </button>
          </div>
        ) : course.homework.length > 0 ? (
          <div className="w-full">{course.homework[0].body}</div>
        ) : (
          <div className="w-full"></div>
        )}
      </td>
      {user.user?.type === "student" && (
        <td className="px-6 py-4 font-medium">
          {course.Grade[0].grade > 0 ? course.Grade[0].grade : null}
        </td>
      )}
    </tr>
  );
});

export default DayOfWeekItem;
