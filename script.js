function Student(name, surname, dateBirth) {
  this.name = name;
  this.surname = surname;
  this.dateBirth = dateBirth;
  this.marks = [];
  this.attendance = new Array(25);

  this.getAge = function () {
    return new Date().getFullYear() - dateBirth;
  }
  this.getAverageScore = function () {
    let res = this.marks.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    })
    return res / this.marks.length;
  }

  this.presentAtLesson = function () {
    if (this.attendance.length <= 25) {
      this.attendance.unshift(true) > length ? this.attendance.pop() : null
    }

  };
  this.absentAtLesson = function () {
    if (this.attendance.length <= 25) {
      this.attendance.unshift(false) > length ? this.attendance.pop() : null
    }
  };

  this.getSummaryResults = function () {
    postiveAttendace = 0;
    this.attendance.forEach(function (value, array) {
      if (value === true) {
        postiveAttendace++;
      }
    })
    koef = postiveAttendace / this.attendance.length;
    if (koef > 0.9 && this.getAverageScore() > 90) {
      console.log("Молодець")
    } else if ((koef < 0.9 && this.getAverageScore() > 90) || (koef > 0.9
        && this.getAverageScore() < 90)) {
      console.log("Добре, але можна краще")
    } else {
      console.log("Редиска")
    }

  }

  this.fillRandomAttendace = function () {

    for (let i = 0; i < 25; i++) {
      let random = Math.floor(Math.random() * (100 - 1) + 1);

      if (random % 2 === 0) {
        this.presentAtLesson()
      } else {
        this.absentAtLesson()
      }
    }
  }

  //щоб оцінки хоч десь у студентів не були 0))))
  this.fillRandomScores = function () {
    this.marks = [...this.attendance.filter(function (value) {
      if (value === true) {
        return value;
      }
    }).map(function (value) {
      return (Math.floor(Math.random() * 10) + 4) * 10;

    })
    ];
  }
}

studentAnton = new Student('Anton', 'Shevchenko', 1995);
console.log(`Вік Антона: ${studentAnton.getAge()}`);
studentAnton.fillRandomAttendace();
studentAnton.fillRandomScores();
console.log(studentAnton);
console.log(`Середня оцінка у Антона: ${studentAnton.getAverageScore()}`);
studentAnton.getSummaryResults();


studentOlga = new Student('Olga', 'Romashka', 1995);
console.log(`Вік Olga: ${studentOlga.getAge()}`);
studentOlga.fillRandomAttendace();
studentOlga.fillRandomScores();
console.log(studentOlga);
console.log(`Середня оцінка у Olga: ${studentOlga.getAverageScore()}`);
studentOlga.getSummaryResults();


studentYuliia= new Student('Yuliia', 'Wolka', 2006);
console.log(`Вік Yuliia: ${studentYuliia.getAge()}`);
studentYuliia.fillRandomAttendace();
studentYuliia.fillRandomScores();
console.log(studentYuliia);
console.log(`Середня оцінка у Yuliia: ${studentYuliia.getAverageScore()}`);
studentYuliia.getSummaryResults();



