
// Задача "Студент"


class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = Array(25).fill(null);
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    present() {
        const index = this.attendance.findIndex(el => el === null);
        if (index !== -1) {
            this.attendance[index] = true;
            return true;
        } else {
            return false;
        }
    }

    absent() {
        const index = this.attendance.findIndex(el => el === null);
        if (index !== -1) {
            this.attendance[index] = false;
            return true;
        } else {
            return false;
        }
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }

    getAttendanceRate() {
        if (this.attendance.length === 0) {
            return 0;
        }
        const presentCount = this.attendance.filter(el => el === true).length;
        return presentCount / this.attendance.length;
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendanceRate = this.getAttendanceRate();

        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Молодец!";
        } else if (averageGrade > 90 || attendanceRate > 0.9) {
            return "Хорошо, но можно лучше";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Джон", "Грин", 1990);

student1.addGrade(95);
student1.addGrade(88);
student1.addGrade(92);

student1.present();
student1.present();
student1.absent();

console.log("Имя студента: ", student1.firstName, student1.lastName);
console.log("Возраст студента: ", student1.getAge());
console.log("Средняя оценка студента: ", student1.getAverageGrade());
console.log("Процент посещаемости студента: ", student1.getAttendanceRate());
console.log("Сводка по студенту: ", student1.summary());





