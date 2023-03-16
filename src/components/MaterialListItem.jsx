import { useState } from "react";
import Icon from "./Icon";
import MaterialFile from "./MaterialFile";

const MaterialListItem = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
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
      <div className={`transition-all ease-out duration-500 overflow-hidden ${!isOpen ? "max-h-0": "max-h-screen"}`}>
       {course.materials.map(m => 
            <MaterialFile key={m.id} material={m}/>
        )}
      </div>
    </div>
  );
};

export default MaterialListItem;
