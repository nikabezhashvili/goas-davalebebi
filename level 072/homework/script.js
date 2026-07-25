// 4
const rectangle = {
    width: 10,
    height: 5,

    get area() {
        return this.width * this.height;
    },

    set side(newValue) {
        if (newValue > 0) {
        this.width = newValue;
        } else {
        console.log("გვერდის სიგრძე უნდა იყოს დადებითი რიცხვი.");
        }
    }
};

// 5

const grade = {
    grades: [40, 80, 100],

    get avg() {
        let sum = 0;
        for (let grade of this.grades) {
        sum += grade;
        }

        return sum / this.grades.length;
    },
    set newgarde(value){
        if(this.avg >= 0 && this.avg <= 100){
            value = this.avg
        }else{
            console.log('ქულების საშუალო რაოდენობა არის 0-ზე ნაკლები ან 100-ზე მეტი');
        }
    }
}

// 6
const convert = {
    _gel: 25,

    get dollar() {
        return this._gel / 2.5;
    },

    set dollar(value) {
        this._gel = value * 2.5;
    }
};
