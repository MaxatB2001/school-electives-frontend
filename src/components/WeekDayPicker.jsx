import { week } from "../data/constants";

const WeekDayPicker = ({days, setDays}) => {
  return (
    <div className="w-full flex space-x-1 flex-wrap">
      {week.map((w, i) => (
        <button key={i} className={`p-2 cursor-pointer border rounded-md ${days.includes(i + 1) && "bg-gray-200"}`} onClick={() => {
          if (days.includes(i + 1)) {
            setDays(days.filter(day => day !== i + 1))
          } else {
            setDays([...days, i + 1])
          }
        }}>
          {w}
        </button>
      ))}
    </div>
  );
};

export default WeekDayPicker;
