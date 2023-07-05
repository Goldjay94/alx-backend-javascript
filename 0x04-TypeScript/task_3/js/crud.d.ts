import { RowID, RowElement } from "./interface";

// export type insertRowFunction = (row: RowElement) => number;
declare function insertRow (row: RowElement): number;
declare function deleteRow (rowId: RowID): void;
declare function updateRow (rowId: RowID, row: RowElement): RowID;
