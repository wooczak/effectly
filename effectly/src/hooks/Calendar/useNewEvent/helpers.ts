type Args = {
  eventDetails: {
    eventName: string;
    eventStartDate: string;
    eventEndDate: string;
    isAllDay: boolean;
    eventCategory: string;
  };
};

export const addNewEventToStore = ({ eventDetails }: Args) => {
  const { eventName, eventStartDate, eventEndDate, isAllDay, eventCategory } =
    eventDetails;

    
};
