export const returnToLocaleDateString = (day: Date) => {
    return day?.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });
  };