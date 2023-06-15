import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { Context } from "../main";
import Icon from "./Icon";
import MaterialListItem from "./MaterialListItem";
import CreateMaterialModal from "./modals/CreateMaterialModal";
import { useNavigate } from "react-router-dom";
import { TEST_ROUTE } from "../data/constants";

const TestList = observer(() => {
  const { course, user } = useContext(Context);
  const [courses, setCourses] = useState([
    { id: 5, name: "Программирование на языке Python", isOpen: false, tests: [
      { id: 1, name: "Тест на знания основ", isBlocked: false },
      { id: 2, name: "Тест на углублённые знания" , isBlocked: false},
      { id: 3, name: "Тест по Django",isBlocked: true },
    ] },
    {
      id: 1,
      name: "Робототехника",
      isOpen: false,
      tests: [
        { id: 1, name: "Робототехника 1", isBlocked: false },
        { id: 2, name: "Робототехника 2", isBlocked: false },
      ],
    },
    { id: 2, name: "Шахматы", isOpen: false, tests: [] },
    { id: 3, name: "Углублённый английский язык", isOpen: false, tests: [] },
  ]);
  console.log(course.coursesWithMaterials);
  return (
    <div className="w-full">
      {courses.map((c) => (
        <TestListItem course={c} />
      ))}
    </div>
  );
});

export default TestList;

const TestListItem = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="border-b border-gray-200 p-2 flex flex-col">
      <div className="w-full flex items-center">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <Icon
            className={`w-8 h-8 mr-2 transition-transform ease-in-out delay-50 ${
              isOpen && "rotate-90"
            }`}
            type="arrow-right"
          />
        </button>
        <span className="font-bold text-xl">{course.name}</span>
      </div>
      <div
        className={`transition-all ease-out duration-500 overflow-hidden ${
          !isOpen ? "max-h-0" : "max-h-screen"
        }`}
      >
        {course.tests.map((m) => (
          <div
            onClick={() => {
              if (!m.isBlocked) {
                navigate(`${TEST_ROUTE}/${m.name}`);
              } 
            }}
            className={`flex items-center mt-2  ${m.isBlocked ? "" : "cursor-pointer"}`}
          >
            <div className={`${m.isBlocked ? "bg-gray-500" : "bg-blue-500"}  rounded-md p-3 mr-2`}>
              <Icon className="text-white" type="test" />
            </div>
            <div className="font-medium">{m.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
