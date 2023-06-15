import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/layouts/Header";
import Timer from "../components/Timer";
import Modal from "../components/modals/Modal";
import { USER_ROUTE } from "../data/constants";

const Test = () => {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  const [test, setTest] = useState([
    {
      id: 1,
      title: "Сколько библиотек можно импортировать в один проект?",
      answers: [
        {title: "Не более 23", isChecked: false},
        {title: "Не более 3", isChecked: false},
        {title: "Не более 5", isChecked: false},
        {title: "Неограниченное количество", isChecked: false},
      ],
    },
    {
      id: 2,
      title: "Какая функция выводит что-либо в консоль?",
      answers: [
        {title: "print();", isChecked: false},
        {title: "write();", isChecked: false},
        {title: "log();", isChecked: false},
        {title: "out();", isChecked: false},
      ],
    },
    {
      id: 3,
      title: "Какая библиотека отвечает за время?",
      answers: [
        {title: "localtime", isChecked: false},
        {title: "clock", isChecked: false},
        {title: "time", isChecked: false},
        {title: "Time", isChecked: false},
      ],
    },
    {
      id: 4,
      title: "Где правильно создана переменная?",
      answers: [
        {title: "num = float(2)", isChecked: false},
        {title: "Нет подходящего варианта", isChecked: false},
        {title: "int num = 2", isChecked: false},
        {title: "var num = 2", isChecked: false},
      ],
    },
    {
      id: 5,
      title: "Какой фреймворк относится к python?",
      answers: [
        {title: "Angular", isChecked: false},
        {title: "Django", isChecked: false},
        {title: "Нет подходящего варианта", isChecked: false},
        {title: "KOA", isChecked: false},
      ],
    },
  ]);
  const { id } = useParams();
  return (
    <div className="min-h-full h-auto bg-stone-100">
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="flex flex-col items-center justify-center">
          <div className="text-cener text-2xl font-semibold">Тест пройден на 100%</div>
          <button onClick={() => navigate("/")} type="button" class="mt-4 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Вернуться на главную</button>
        </div>

      </Modal>
      <Header />
      <div className="text-center text-2xl font-semibold">
        Тестирование: {id}
      </div>
      <div className="max-w-5xl w-full mx-auto p-2 flex flex-col items-start">
      <Timer initialMinute={2} initialSeconds={10}/>
        {test.map((t) => (
          <div key={t.id} className="mt-5">
            <div className="text-base font-medium">{t.title}</div>
            <div>
              {t.answers.map((a) => (
                <div key={a}>
                  <div class="flex items-center">
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      value={a.isChecked}
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="checked-checkbox"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {a.title}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-3">
      <button onClick={() => setShowModal(true)} type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Завершить попытку</button>
      </div>
    </div>
  );
};

export default Test;
