import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase/firebase";

interface CalendarDataType {
  event_name: string;
  event_location: string;
  event_start: any;
  event_end: any;
}

const useCalendarData = (userId: string) => {
  const [calData, setCalData] = useState<CalendarDataType>();

  const setCalendarData = async () => {
    const dataQuery = collection(database, "users", `${userId}`, "calendar");

    const dataSnapshot = await getDocs(dataQuery);

    dataSnapshot.forEach((doc) => {
      if (doc.exists()) {
        setCalData(doc.data() as any);
      }
    });
  };

  useEffect(() => {
    if (userId) {
      setCalendarData();
    }
  }, [userId]);

  return { calData };
};

export default useCalendarData;
