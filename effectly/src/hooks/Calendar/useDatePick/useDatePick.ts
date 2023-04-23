import { addDays, getDay } from "date-fns";
import { useState } from "react";
import { returnToLocaleDateString } from "./helpers";

enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const useDatePick = () => {
  const [calendarDay, setCalendarDay] = useState(new Date(Date.now()));

  const incrementDay = () => setCalendarDay(addDays(calendarDay, 1));
  const decrementDay = () => setCalendarDay(addDays(calendarDay, -1));

  const weekDayString = Days[getDay(calendarDay)];
  const dayString = returnToLocaleDateString(calendarDay);

  return { calendarDay, dayString, weekDayString, incrementDay, decrementDay };
};

export default useDatePick;
