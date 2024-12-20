export function GetRange(sheet, address) {
    return sheet.getRange(address);
}
export function GetUsedRange(sheet) {
    return sheet.getUsedRange();
}
export function GetRangeByIndexes(sheet, startRow, startCol, rowCount, colCount) {
    return sheet.getRangeByIndexes(startRow, startCol, rowCount, colCount);
}
export function GetContext(sheet) {
    return sheet.context;
}
