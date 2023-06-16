import { parse, setHours, setMinutes } from "date-fns";
import { MutableRefObject } from "react";

interface FormPropsTypes {
  handleAllDayClick: () => void;
  handleEventNameInput: (value: string) => void;
  eventTimeStart: MutableRefObject<{ value: string }>;
  eventTimeEnd: MutableRefObject<{ value: string }>;
  eventDateStart: MutableRefObject<{ value: string }>;
  eventDateEnd: MutableRefObject<{ value: string }>;
}

export const returnFormProps = (props: FormPropsTypes) => {
  return {
    Label: {
      EventName: {
        htmlFor: "event-name",
      },
      AllDay: {
        htmlFor: "all-day",
        onClick: props?.handleAllDayClick,
        id: "all-day-label",
      },
      StartTime: {
        htmlFor: "start-time",
      },
      EndTime: {
        htmlFor: "end-time",
      },
    },
    Input: {
      EventName: {
        type: "text",
        id: "event-name",
        name: "event-name",
        onChange: (e: { target: { value: any } }) =>
          props?.handleEventNameInput(e.target.value),
      },
      AllDay: {
        type: "checkbox",
        id: "all-day",
        name: "all-day",
        onClick: props?.handleAllDayClick,
      },
      StartTime: {
        type: "time",
        id: "start-time",
        name: "start-time",
        ref: props?.eventTimeStart,
      },
      StartDate: {
        type: "date",
        id: "start-date",
        name: "start-date",
        ref: props?.eventDateStart,
      },
      EndTime: {
        type: "time",
        id: "end-time",
        name: "end-time",
        ref: props?.eventTimeEnd,
      },
      EndDate: {
        type: "date",
        id: "end-date",
        name: "end-date",
        ref: props?.eventDateEnd,
      },
    },
  };
};

export const formatToDate = (time: string, date: string) => {
  const parsedDate = parse(date, "yyyy-MM-dd", new Date());
  const [hours, minutes] = time.split(":").map(Number);

  const resultDate = setMinutes(setHours(parsedDate, hours), minutes);
  console.log(resultDate);

  return resultDate;
};
