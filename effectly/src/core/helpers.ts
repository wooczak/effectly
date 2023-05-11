import { TypeOfQuery } from "./types";
import { QueryByClass, QueryById} from "./variables";

export const querySelectorBy = (type: TypeOfQuery, query: string) => {
  let returnedSelector: Element | null;

  switch (type) {
    case QueryById:
      returnedSelector = document.querySelector(`#${query}`);
      break;
    case QueryByClass:
      returnedSelector = document.querySelector(`.${query}`);
      break;
    default:
      returnedSelector = null;
      break;
  }

  return returnedSelector;
};