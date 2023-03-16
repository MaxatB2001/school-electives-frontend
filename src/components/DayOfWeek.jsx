import { useContext } from "react";
import { Context } from "../main";
import DayOfWeekItem from "./DayOfWeekItem";

const DayOfWeek = ({ day }) => {
  const { user } = useContext(Context);
  const days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const d = new Date(day.date);
  d.setDate(d.getDate() - 1);
  return (
    <div className="h-full w-full">
      <div className="text-center font-serif text-base font-semibold text-sky-700">
        {days[d.getDay() - 1] + " " + d.getDate()}
      </div>
      <table className="border border-blue-400 h-full w-full rounded-md text-sm text-left text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
          <tr>
            <th scope="col" className="px-6 py-3 bg-blue-500">
              Время
            </th>
            <th scope="col" className="px-6 py-3">
              Предмет
            </th>
            <th scope="col" className="px-6 py-3 bg-blue-500">
              Домашнее задание
            </th>
            {user.user?.type === "student" && (
              <th scope="col" className="px-6 py-3">
                Оценка
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {day.courses.length > 0 ? (
            day.courses.map((course) => (
              <DayOfWeekItem key={course.id} course={course} date={day.date}/>
            ))
          ) : (
            <tr className="bg-blue-500">
              <th colSpan={"4"} className="w-full">
                <div className="flex items-center justify-center uppercase">
                  Свободно
                </div>
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DayOfWeek;
