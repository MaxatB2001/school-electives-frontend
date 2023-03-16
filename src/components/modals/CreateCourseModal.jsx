import { useState } from "react";
import InputField from "../ui/InputField";
import WeekDayPicker from "../WeekDayPicker";
import Modal from "./Modal";
import Button from "../ui/Button";
import CourseService from "../../service/courseService";
import { classNumbers } from "../../data/constants";

const CreateCourseModal = ({ showModal, setShowModal }) => {
  const [days, setDays] = useState([]);
  const [time, setTime] = useState(undefined);
  const [form, setForm] = useState({
    name: "",
    about: "",
    startDate: null,
    endDate: null,
    time: "",
    image: null,
    audience: 0,
    classOriented: [],
  });
  console.log(form.classOriented);
  const submitHandler = () => {
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("about", form.about);
    formData.append("startDate", form.startDate);
    formData.append("endDate", form.endDate);
    formData.append("image", form.image);
    formData.append("time", time);
    formData.append("days", JSON.stringify(days));
    formData.append("classOriented", JSON.stringify(form.classOriented))
    formData.append("audience", form.audience)
    CourseService.addCourse(formData);
  };

  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <InputField
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="название курса"
      />
      <textarea
        onChange={(e) => setForm({ ...form, about: e.target.value })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Описание курса"
      />
      <InputField
        value={form.audience}
        onChange={(e) => setForm({ ...form, audience: e.target.value})}
        placeholder="кабинет"
      />
      <div>Выбранные классы {form.classOriented.join(" ")}</div>
      <select
        onChange={(e) =>
          setForm({
            ...form,
            classOriented: [...form.classOriented, Number(e.target.value)],
          })
        }
      >
        {classNumbers.map((cn) => (
          <option value={cn} key={cn}>{cn}</option>
        ))}
      </select>
      <input
        onChange={(e) =>
          setForm({
            ...form,
            startDate: new Date(e.target.value).toISOString(),
          })
        }
        className="text-black"
        type="date"
      />
      <input
        onChange={(e) =>
          setForm({ ...form, endDate: new Date(e.target.value).toISOString() })
        }
        className="text-black"
        type="date"
      />
      <input
        onChange={(e) => {
          const splitted = e.target.value.split(":");
          const time = new Date();
          time.setHours(Number(splitted[0]) + 3);
          time.setMinutes(Number(splitted[1]));
          setTime(time.toLocaleString("ru"));
        }}
        type="time"
      />
      <input
        onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
        type="file"
        className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
      />
      <WeekDayPicker days={days} setDays={setDays} />
      <Button onClick={submitHandler} size="sm">
        Создать
      </Button>
    </Modal>
  );
};

export default CreateCourseModal;
