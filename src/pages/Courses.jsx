import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import CourseCard from "../components/CourseCard";
import { Context } from "../main";
import Header from "../components/layouts/Header";
import bgImage from "../assets/studyng.webp"
import Footer from "../components/layouts/Footer";

export const Courses = observer(() => {
  const {course} = useContext(Context);
  console.log(course.courses);
  useEffect(() => {
    course.getCourses()
  }, [])
  return (
    <div className="min-h-full h-auto bg-stone-100">
      <Header/>
    <div className="max-w-5xl mx-auto h-full "> 
      <div style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "50% 40%",
        // backgroundRepeat:"no-repeat",
      }} className="h-72">
      </div>
      <div className="px-10 grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 auto-rows-fr gap-5 mt-5">
        {course.courses.map(c => 
          <CourseCard key={c.id} course={c}/>
        )}
      </div>
    </div>
    </div>
  );
});
