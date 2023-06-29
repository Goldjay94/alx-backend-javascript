export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  set maxStudentsSize(newNumber) {
    if (typeof newNumber === 'number') {
      this._maxStudentsSize = newNumber;
    }
  }

  get maxStudentsSize() {
    return this._numberStudents;
  }
}
