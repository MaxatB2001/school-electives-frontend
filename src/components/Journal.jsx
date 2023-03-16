import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../main";
import Loader from "./ui/Loader";
import CourseService from "../service/courseService";
import { classLetters, classNumbers } from "../data/constants";

export const Journal = observer(() => {
  const { journal, user } = useContext(Context);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [classNumber, setClassNumber] = useState(undefined);
  const [classLetter, setClassLetter] = useState(undefined);

  const handleGradeUpdate = (e, gradeId) => {
    CourseService.updateGrade(gradeId, Number(e.target.value));
  };

  useEffect(() => {
    if (selectedCourse) {
      journal.getJournal(selectedCourse, classNumber, classLetter);
    }
  }, [selectedCourse, classLetter, classNumber]);

  if (journal.isLoading)
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <div className="overflow-auto">
      <div className="space-x-2 mb-2">
      <select
        onChange={(e) => setSelectedCourse(e.target.value)}
        className="p-2 bg-blue-200 rounded-md"
      >
        <option value={undefined} selected>
          выберите курс
        </option>
        {user.user?.Course.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => setClassNumber(e.target.value)}
        className="p-2 bg-blue-200 rounded-md"
      >
        <option selected value={undefined}>
          выберите номер класса
        </option>
        {classNumbers.map((cn) => (
          <option value={cn} key={cn}>
            {cn}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => setClassLetter(e.target.value)}
        className="p-2 bg-blue-200 rounded-md"
      >
        <option selected value={undefined}>
          выберите букву класса
        </option>
        {classLetters.map((cn) => (
          <option value={cn} key={cn}>
            {cn}
          </option>
        ))}
      </select>
      </div>
      {selectedCourse && (
        <table className="border border-blue-400 h-full w-full rounded-md text-sm text-left text-blue-100">
          <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr>
              <th className="px-6 py-3 bg-blue-600" scope="col">
                Ученики
              </th>
              {journal.journal.days?.map((day, i) => {
                return (
                  <th className="border border-blue-400 p-2" key={i}>
                    {String(new Date(day).getDate()).padStart(2, "0") +
                      "." +
                      String(new Date(day).getMonth()).padStart(2, "0")}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {journal.journal.students?.map((s, i) => (
              <tr
                className={
                  (i + 1) % 2 == 0
                    ? `px-6 py-3 bg-blue-600`
                    : `px-6 py-3 bg-blue-500`
                }
                key={s.student.id}
              >
                <td className="px-6 py-3 border border-blue-400">
                  {s.student.firstName + " " + s.student.lastName}
                </td>
                {s.student.Grade.map((grade) => (
                  <td
                    className="border border-blue-400 cursor-pointer text-center"
                    key={grade.id}
                  >
                    <select
                      onChange={(e) => handleGradeUpdate(e, grade.id)}
                      className="appearance-none bg-inherit w-full h-full text-center"
                    >
                      <option
                        className="bg-blue-500"
                        defaultValue={grade.grade === 0 ? null : grade.grade}
                      >
                        {grade.grade === 0 ? null : grade.grade}
                      </option>
                      <option value={5} className="bg-blue-500">
                        5
                      </option>
                      <option value={4} className="bg-blue-500">
                        4
                      </option>
                      <option value={3} className="bg-blue-500">
                        3
                      </option>
                      <option value={2} className="bg-blue-500">
                        2
                      </option>
                    </select>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
});
