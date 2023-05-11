interface FormPropsTypes {
  handleAllDayClick: () => void;
  eventNameRef: React.RefObject<HTMLInputElement>;
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
        ref: props?.eventNameRef,
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
      },
      StartDate: {
        type: "date",
        id: "start-date",
        name: "start-date",
      },
      EndTime: {
        type: "time",
        id: "end-time",
        name: "end-time",
      },
      EndDate: {
        type: "date",
        id: "end-date",
        name: "end-date",
      },
    },
  };
};
