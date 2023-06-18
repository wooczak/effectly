import { parse, setHours, setMinutes } from "date-fns";

interface FormPropsTypes {
  handleAllDayClick: () => void;
  handleEventNameInput: (value: string) => void;
  eventTimeStart: Date;
  eventTimeEnd: Date;
  eventDateStart: Date;
  eventDateEnd: Date;
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
        value: props?.eventTimeStart,
      },
      StartDate: {
        value: props?.eventDateStart,
      },
      EndTime: {
        value: props?.eventTimeEnd,
      },
      EndDate: {
        value: props?.eventDateEnd,
      },
    },
  };
};

export const formatToDate = (time: string, date: string) => {
  const parsedDate = parse(date, "yyyy-MM-dd", new Date());
  const [hours, minutes] = time.split(":").map(Number);

  const resultDate = setMinutes(setHours(parsedDate, hours), minutes);

  return resultDate;
};