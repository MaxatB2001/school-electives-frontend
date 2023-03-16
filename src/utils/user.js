export const isUserJoined = (userCourses = [], currentCourseId) => {
  const courses = userCourses.filter((c) => c.courseId == currentCourseId);
  console.log(userCourses);
  console.log(courses);
  if (courses.length > 0) return true;
  return false;
};
