import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import DayOfWeek from "./DayOfWeek";
import Icon from "./Icon";
import Loader from "./ui/Loader";

const UserSchedule = observer(() => {
  const { schedule } = useContext(Context);
  const [currentDate, setCurrentDate] = useState(new Date());
  console.log(schedule.schedule);
  useEffect(() => {
    schedule.getUserSchedule(currentDate);
  }, [currentDate]);

  const incrementDate = () => {
    const dateCopy = new Date(currentDate);
    dateCopy.setDate(dateCopy.getDate() + 7);
    setCurrentDate(dateCopy);
  };

  const decrementDate = () => {
    const dateCopy = new Date(currentDate);
    dateCopy.setDate(dateCopy.getDate() - 7);
    setCurrentDate(dateCopy);
  };
  if (schedule.isLoading) return <div className="flex items-center justify-center"><Loader/></div>
  return (
    <div className="grid gap-x-4 gap-y-8 grid-cols-2 auto-rows-fr relative">
      <button
        onClick={decrementDate}
        className="absolute -left-12 top-1/2 cursor-pointer"
      >
        <Icon type={"arrow-left"} />
      </button>
      <button
        onClick={incrementDate}
        className="absolute -right-12 top-1/2 cursor-pointer"
      >
        <Icon type={"arrow-right"} />
      </button>
      {schedule.schedule.map((day) => (
        <DayOfWeek key={day.date} day={day} />
      ))}
    </div>
  );
});

export default UserSchedule;
