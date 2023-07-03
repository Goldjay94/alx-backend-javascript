export default function updateStudentGradeByCity(students, city, grades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const grade = grades.find((grade) => grade.studentId === student.id);
      /* eslint-disable no-param-reassign */
      if (grade) {
        student.grade = grade.grade;
      } else {
        student.grade = 'N/A';
      }
      /* eslint-disable no-param-reassign */
      return student;
    });
}
