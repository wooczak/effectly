import { useEffect, useState } from "react";
import { getDocs, query } from "firebase/firestore";
import { queryCalendarData } from "../../core/firebase/queries";

const useCalendarData = (userId: string) => {
  const [calData, setCalData] = useState<any[]>([]);

  const setCalendarData = async () => {
    const dataQuery = queryCalendarData(userId);
    const dataSnapshot = await getDocs(dataQuery);

    dataSnapshot.forEach((doc) => {
      if (doc.exists()) {
        setCalData((prevData) => [...prevData, doc.data()]);
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
