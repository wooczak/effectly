import { QueryByClass, QueryById } from "./variables";

type QueryById = typeof QueryById;
type QueryByClass = typeof QueryByClass;

export type TypeOfQuery = QueryById | QueryByClass;