export function GetValues(range) {
    return range.values;
}
export function SetValues(range, values) {
    range.values = values;
}
export function GetEntireRow(range) {
    return range.getEntireRow();
}
export function GetEntireColumn(range) {
    return range.getEntireColumn();
}
export function Load(range, property) {
    range.load(property);
}
export function GetContext(range) {
    return range.context;
}
export function GetColumnCount(range) {
    return range.columnCount;
}
export function GetRowCount(range) {
    return range.rowCount;
}
export function GetAddress(range) {
    return range.address;
}
export function CopyFrom(range, sourceRange) {
    range.copyFrom(sourceRange);
}
export function MoveTo(range, t) {
    range.moveTo(t);
}
export function Delete(range, shiftString) {
    range.delete(shiftString);
}
export function GetFormat(range) {
    return range.format;
}
