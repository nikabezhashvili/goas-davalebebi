
let student = {
    name: "ნიკა",
    grades: [10, 8, 9]
}

printStudentInfo = student => {
    for (let i in student) {
        if (i === 'name') {
            console.log(student.name);
        }else if(i === 'grades'){
            for (let i of student.grades) {
                console.log(i);
            }
        }
    }
}
printStudentInfo()

