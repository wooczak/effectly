import { Timestamp } from "firebase/firestore";

export const toLocaleTimeStringNoSeconds = (input: Timestamp) => {
  const output = input
    .toDate()
    .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return output;
};
