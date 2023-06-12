import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Journal } from "../components/Journal";
import StudentGrades from "../components/StudentGrades";
import UserSchedule from "../components/UserSchedule";
import Tabs from "../components/Tabs";
import { Context } from "../main";
import MaterialList from "../components/MaterialList";
import CreateCourseModal from "../components/modals/CreateCourseModal";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

export const User = observer(() => {
  const { user } = useContext(Context);
  const [activeTabId, setActiveTabId] = useState(1);
  const [showCreateCourseModal, setShowCreateCourseModal] = useState(false);
  const tabs = [
    {
      id: 1,
      title: "Расписание",
      iconType: "calendar",
    },
    {
      id: 2,
      title: "Журнал",
      iconType: "journal",
    },
    {
      id: 3,
      title: "Материалы",
      iconType: "books",
    },
  ];
  return (
    <div className="min-h-full h-auto bg-stone-100">
      <Header/>
      <div className="max-w-5xl mx-auto">
      <h1 className="text-center font-normal text-4xl">Личный кабинет</h1>
      <div className="flex space-x-4 mt-10 py-2">
        <a href={`http://localhost:5000/${user.user.image}`} className="max-w-xs">
          <img src={`http://localhost:5000/${user.user.image}`} />
        </a>
        <div className="text-base font-medium">
          <p>{user.user.firstName + " " + user.user.lastName}</p>
          {user.user.type === "student" ? (
            <p>{`Ученик ${user.user.class + user.user.classLetter} класса`}</p>
          ) : (
            <p>учитель</p>
          )}
        </div>
      </div>
      <CreateCourseModal
        showModal={showCreateCourseModal}
        setShowModal={setShowCreateCourseModal}
      />
      {user.user.type === "teacher" && (
        <button
          onClick={() => setShowCreateCourseModal(true)}
          className="p-2 bg-blue-500 rounded-lg text-white font-medium"
        >
          Создать курс
        </button>
      )}
      <Tabs
        tabs={tabs}
        activeTabId={activeTabId}
        setActiveTabId={setActiveTabId}
      />
      {activeTabId === 2 ? (
        user.user.type === "teacher" ? (
          <Journal />
        ) : (
          <StudentGrades />
        )
      ) : null}
      {activeTabId === 1 && <UserSchedule />}
      {activeTabId === 3 && <MaterialList />}
    </div>
    </div>
  );
});