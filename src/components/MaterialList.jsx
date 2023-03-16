import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { Context } from "../main";
import MaterialListItem from "./MaterialListItem";
import CreateMaterialModal from "./modals/CreateMaterialModal";

const MaterialList = observer(() => {
  const { course, user } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  console.log(course.coursesWithMaterials);
  useEffect(() => {
    course.getCoursesWithMaterials();
  }, []);
  return (
    <div className="w-full">
      <CreateMaterialModal showModal={showModal} setShowModal={setShowModal} />
      {user.user.type === "teacher" && (
        <button
          onClick={() => setShowModal(true)}
          className="p-2 bg-blue-500 rounded-lg text-white font-medium"
        >
          Добавить материал
        </button>
      )}
      {course.coursesWithMaterials.map((course) => ( 
        <MaterialListItem key={course.id} course={course} />
      ))}
    </div>
  );
});

export default MaterialList;
