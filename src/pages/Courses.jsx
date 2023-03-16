import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import CourseCard from "../components/CourseCard";
import { Context } from "../main";

export const Courses = observer(() => {
  const {course} = useContext(Context);
  console.log(course.courses);
  useEffect(() => {
    course.getCourses()
  }, [])
  return (
    <div className="max-w-5xl mx-auto">
      <div className="h-64 bg-blue-700">
        Платформа "Онлайн-образование"
      </div>
      <div className="px-10 grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 auto-rows-fr gap-5 mt-5">
        {course.courses.map(c => 
          <CourseCard key={c.id} course={c}/>
        )}
      </div>
    </div>
  );
});
