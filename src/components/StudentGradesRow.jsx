import React from "react";

const StudentGradesRow = ({course, index}) => {
  let middle = 0
  return (
    <tr
      className={
        (index + 1) % 2 == 0
          ? `px-6 py-3 bg-blue-600 border border-blue-400`
          : `px-6 py-3 bg-blue-500 border border-blue-400`
      }
    >
      <td className="px-6 py-3 font-medium h-full">
        <div>{course.name}</div>
      </td>
      <td className="flex gap-2 px-2 py-3 font-medium h-full">
        {course.Grade.map((g) => {
          middle += g.grade;
          return (
            <div key={g.id} className="font-medium">
              {g.grade}
            </div>
          );
        })}
      </td>
      <td className="text-center">
        {middle > 0 ? middle / course.Grade.length : null}
      </td>
      <td className="text-center">
        {middle > 0 ? Math.round(middle / course.Grade.length) : null}
      </td>
    </tr>
  );
};

export default StudentGradesRow;
