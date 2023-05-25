import { Timestamp, addDoc } from "firebase/firestore";
import { queryCalendarData } from "./queries";

type DataToPush = {
  event_name: string;
  event_location?: string;
  event_start: Date;
  event_end: Date;
};

export const pushCalendarEventToDB = async (
  userId: string,
  data: DataToPush
) => {
  const doc = await addDoc(queryCalendarData(userId), {
    ...data,
  });
  console.log(userId);
  console.log(doc);
};
