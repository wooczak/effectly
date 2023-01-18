import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../core/firebase/firebase";

const useCalendarData = (userId: string) => {
  const [calData, setCalData] = useState<any[]>([]);

  const setCalendarData = async () => {
    const dataQuery = collection(database, "users", `${userId}`, "calendar");
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
