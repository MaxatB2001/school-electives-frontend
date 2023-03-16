import { useNavigate } from "react-router-dom";
import { COURSE_ROUTE } from "../data/constants";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const startDate = new Date(course.startDate);
  console.log(startDate);
  return (
    <div
      onClick={() => navigate(`${COURSE_ROUTE}/${course.id}`)}
      className="cursor-pointer shadow-md hover:shadow-xl rounded-md h-full flex flex-col"
    >
      <div>
        <img
          className="rounded-t-md w-full max-h-[150px] h-full object-cover"
          src={"http://localhost:5000/" + course.image}
          alt="img"
        />
      </div>
      <div className="p-4 flex flex-col h-full justify-between">
        <p className="font-bold text-lg">{course.name}</p>
        <div>
          <button className="mt-10 mb-2 text-lg font-medium px-4 py-1 bg-orange-400 rounded-full text-white">
            Записаться
          </button>
          <p className="font-semibold text-md">{`с ${String(startDate.getDay()).padStart(2, "0")}.${String(startDate.getMonth()).padStart(2, "0")}.${startDate.getFullYear()}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
