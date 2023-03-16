import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "../main";
import StudentGradesRow from "./StudentGradesRow";
import Loader from "./ui/Loader";

const StudentGrades = observer(() => {
  const { journal } = useContext(Context);
  useEffect(() => {
    journal.getStudentGrades();
  }, []);

  if (journal.isLoading)
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <table className="border border-blue-400 h-full w-full rounded-md text-sm text-left text-blue-100">
      <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
        <tr>
          <th className="px-6 py-3 bg-blue-600 w-1/4" colSpan={1} scope="col">
            Курс
          </th>
          <th scope="col">
            <span>Оценки</span>
          </th>
          <th scope="col" colSpan={1} className="w-1/12 px-6 py-3 bg-blue-600">
            Балл
          </th>
          <th scope="col" colSpan={1} className="w-1/12 px-6 py-3 bg-blue-600">
            Итог
          </th>
        </tr>
      </thead>
      <tbody>
        {journal.studentGrades.courses?.map((c, index) => (
          <StudentGradesRow key={c.course.id} course={c.course} index={index}/>
        ))}
      </tbody>
    </table>
  );
});

export default StudentGrades;
