import { addDoc } from "firebase/firestore";
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
  try {
    await addDoc(queryCalendarData(userId), {
      ...data,
    });
  } catch (error) {
    console.error(error);
  }
};
