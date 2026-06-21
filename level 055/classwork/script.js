function avg1(grade1,grade2,grad3,grad4,grade5) {
    return (grade1+grade2+grad3+grad4+grade5)/5
}

console.log(avg1(5,10,15,20,25))

const avg2 = function (grade1,grade2,grad3,grad4,grade5){
    return (grade1+grade2+grad3+grad4+grade5)/5
}
console.log(avg2(5,10,15,20,25))

const avg3 = (grade1,grade2,grad3,grad4,grade5) => (grade1+grade2+grad3+grad4+grade5)/5
console.log(avg3(5,10,15,20,25))
