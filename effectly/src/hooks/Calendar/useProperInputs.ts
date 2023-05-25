import { useEffect } from "react";
import { addHours, format } from "date-fns";

import { querySelectorBy } from "../../core/helpers";
import { ID } from "../../core/variables";

const useProperInputs = (isAllDay: boolean) => {
  useEffect(() => {
    // This logic is used to set the inputs' date/time to current
    const startTimeInput = querySelectorBy(
      ID,
      "start-time"
    ) as HTMLInputElement;
    const endTimeInput = querySelectorBy(ID, "end-time") as HTMLInputElement;
    const endDateInput = querySelectorBy(ID, "end-date") as HTMLInputElement;
    const startDateInput = querySelectorBy(
      ID,
      "start-date"
    ) as HTMLInputElement;

    if (startTimeInput !== null && endTimeInput !== null) {
      startTimeInput.value = format(new Date(), "HH:mm");
      endTimeInput.value = format(addHours(new Date(), 1), "HH:mm");
    }

    startDateInput!.value = format(new Date(), "yyyy-MM-dd");
    endDateInput!.value = format(new Date(), "yyyy-MM-dd");
  }, [isAllDay]);
};

export default useProperInputs;
