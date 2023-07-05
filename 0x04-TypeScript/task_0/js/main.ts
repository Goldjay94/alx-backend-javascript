interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Gold",
    lastName: "Jay",
    age: 29,
    location: "Dubai"
};

const student2: Student = {
    firstName: "Valerie",
    lastName: "Onyeka",
    age: 35,
    location: "Dubai"
};

const studentList: Student[] = [student1, student2];

const body: HTMLBodyElement = document.querySelector("body");
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLElement = document.createElement("thead");
const tbody: HTMLElement = document.createElement("tbody");


function generateRow(rowContainer: HTMLElement, data: string[]) {
    const row: HTMLTableRowElement = document.createElement("tr");
    rowContainer.appendChild(row);
    for (let i = 0; i < data.length; i++) {
        const cell: HTMLTableCellElement = document.createElement("td");
        cell.textContent = data[i];
        row.appendChild(cell);
    }
}

generateRow(thead, ["First Name", "Location"]);
for (let i = 0; i < studentList.length; i++) {
    generateRow(tbody, [studentList[i].firstName, studentList[i].location]);
}

table.appendChild(thead);
table.appendChild(tbody);
body.appendChild(table);
