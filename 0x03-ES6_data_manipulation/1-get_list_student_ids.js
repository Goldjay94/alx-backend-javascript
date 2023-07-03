export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((student) => student.id);
  }
  return [];
}
