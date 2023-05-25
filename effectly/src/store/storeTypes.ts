interface GlobalStore {
  user: {
    user: any | null;
  };
  calendar: {
    isAddNewEventModalOpened: boolean;
    newEventInput: {
      name: string;
      startDate: number;
      endDate: number;
      isAllDay: boolean;
      category: string;
    };
  };
}
