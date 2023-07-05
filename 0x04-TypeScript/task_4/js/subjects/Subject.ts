/// <reference path="Teacher.ts" />

namespace Subjects {
    export class Subject {
        teacher: TeacherInterface;
        setTeacher(teacher: TeacherInterface): void {
            this.teacher = teacher;
        }
    }
}
