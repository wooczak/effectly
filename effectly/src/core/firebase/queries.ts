import { collection } from "firebase/firestore";
import { database } from "./firebase";

export const queryCalendarData = (userId: string) =>
  collection(database, "users", `${userId}`, "calendar");
