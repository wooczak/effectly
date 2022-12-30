import { addDays } from "date-fns";
import { useState } from "react";

const useDatePick = () => {
  const [calendarDay, setCalendarDay] = useState(new Date(Date.now()));

  const incrementDay = () => setCalendarDay(addDays(calendarDay, 1));
  const decrementDay = () => setCalendarDay(addDays(calendarDay, -1));

  return { calendarDay, incrementDay, decrementDay };
};

export default useDatePick;
