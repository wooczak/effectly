import { ID, CLASS } from "./variables";

type QueryById = typeof ID;
type QueryByClass = typeof CLASS;

export type TypeOfQuery = QueryById | QueryByClass;