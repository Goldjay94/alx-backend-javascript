export default function createIteratorObject(report) {
  let allEmployees = [];
  //   for ( const [department, employees] of Object.entries(report.allEmployees)) {
  for (const employees of Object.values(report.allEmployees)) {
    allEmployees = [...allEmployees, ...employees];
  }
  return allEmployees;
}
