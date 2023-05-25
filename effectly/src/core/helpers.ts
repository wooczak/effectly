import { TypeOfQuery } from "./types";
import { CLASS, ID } from "./variables";

export const querySelectorBy = (type: TypeOfQuery, query: string) => {
  let returnedSelector: Element | null;

  switch (type) {
    case ID:
      returnedSelector = document.querySelector(`#${query}`);
      break;
    case CLASS:
      returnedSelector = document.querySelector(`.${query}`);
      break;
    default:
      returnedSelector = null;
      break;
  }

  return returnedSelector;
};