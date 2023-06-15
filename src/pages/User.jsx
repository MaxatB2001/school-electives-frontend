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
import TestList from "../components/TestList";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../data/constants";

export const User = observer(() => {
  const navigate = useNavigate()
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
    {
      id: 4,
      title: "Тестирование",
      iconType: "test"
    }
  ];

  const logout = () => {
    user.isAuth = false
    user.user = {}
    localStorage.removeItem("token");
    navigate(LOGIN_ROUTE)
  }

  return (
    <div className="min-h-full h-auto bg-stone-100 relative">
      <Header/>
      <div className="max-w-5xl mx-auto">
      <div className="relative">
      <h1 className="text-center font-normal text-4xl">Личный кабинет</h1>
      <button onClick={() => logout()} type="button" class="absolute top-2 right-0 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Выйти</button>
      </div>
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
      {activeTabId === 4 && <TestList/>}
    </div>
    </div>
  );
});