/*******************
* Variable and data types
*
var firstName = 'John';
console.log(firstName);

var lastName ='Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';

/******************
 * Variable mutation and type coercion
 

 var firstName = 'John';
 var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name? ');
console.log(firstName + ' ' + lastName);

/**************************
 * Basic operators
 

var year, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - 28;
yearMark = now - 33;
console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// Typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
var x;
console.log(typeof x);

/****************
 * Operator precedence
 

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);

/***************
 * Coding Challenge
 

var markMass, johnMass, markHeight, johnHeight;

markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;

var markBMI = markMass / markHeight ** 2;
console.log(markBMI);
var johnBMI = johnMass / johnHeight ** 2;
console.log(johnBMI);

var higherBMI = markBMI >= johnBMI;
console.log(higherBMI);

console.log('Is Mark\'s BMI higher than John\'s BMI?' + ' ' + higherBMI);

/************
 * if/else statements


var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon!');
}


var markMass, johnMass, markHeight, johnHeight;

markMass = 78;
markHeight = 1.69;
johnMass = 192;
johnHeight = 1.95;

var markBMI = markMass / markHeight ** 2;
console.log(markBMI);
var johnBMI = johnMass / johnHeight ** 2;
console.log(johnBMI);

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
};

/******************
 * Boolean logic
 
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age < 16 && age > 13) {
    console.log(firstName + ' is a teenager.');
} else if ( age >= 20 && age < 30 ) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}

/******************
 * The Ternary Operator and Switch Statements 
 

var firstName = 'John';
var age = 14;

// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch statement

var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber');
        break;
    default:
        console.log(firstName + ' does something else');
}

var firstName = 'John';
var age = 10;

switch (true)
{
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age < 16 && age > 13:
        console.log(firstName + ' is a teenager.');
     break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');    
        break;
    default:
        console.log(firstName + ' is a man.');
}

/******
 * 
 

 var height;

 height = 0;

 if (height || height === 0) {
     console.log('Variable is defined');
 }else {
     console.log('Variable has NOT been defined')
 }

// Equality Operators

if (height = '23'){
    console.log('The == operator does type coercion');
}


var johnAverage
var mikeAverage;

johnAverage = ((116 + 121 + 123) / 3);
console.log(johnAverage);

mikeAverage = ((116 + 94 + 123) / 3);
console.log(mikeAverage);

maryAverage = ((155 + 134 + 105) / 3);
console.log(maryAverage);

switch (true) {
    case (johnAverage > mikeAverage):
    console.log('John\'s team wins with average of: ' + johnAverage);
    break;
    case (johnAverage < mikeAverage):
    console.log('Mike\'s team wins with average of: ' + mikeAverage);
    break;
    case (johnAverage === mikeAverage):
    console.log('Both teams win with a tie')
    break;
    default:
    console.log('we have an error')
    break;
}

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log('John\'s team wins');
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
    console.log('Mike\'s team wins');
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    console.log('Mary\'s team wins');
} else {
    console.log('There is a draw')
}

/*if (johnAverage > mikeAverage){
    console.log('John\'s team wins with ' + johnAverage)
} else if (mikeAverage > johnAverage){
    console.log('Mike\'s team wins with ' + mikeAverage)
} else {
    console.log('There is a draw')
} 
*/

/**********
 * Functions
 
   
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1968);

console.log(ageJohn, ageJane, ageMike);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.')
    } else {
        console.log(firstName + ' is already retired');
    }

}

yearsUntilRetirement(1990, 'John')
yearsUntilRetirement(1923, 'Mike')
yearsUntilRetirement(1986, 'Jane')

/*********
 * Function Expressions

//function declaration
//function whatDoYouDo(job, firstName)


 //function expression
 var whatDoYouDo = function(job, firstName) {
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives people around';
        case 'designer':
            return firstName + ' designs cloths';
        default:
            return firstName + ' does something else';

    }
 }

 console.log(whatDoYouDo('teacher', 'John'));
 console.log(whatDoYouDo('driver', 'MIke'));
 console.log(whatDoYouDo('designer', 'Kim'));

/*******
 * Arrays
 

 // Initialize new array
 var names = ['John', 'Mark', "Jane"];
 var years = new Array(1990, 1969, 1948);

console.log(names[1]);
console.log(years[1]);
console.log(names[1] + (' was born in ') + years[1]);
console.log(names.length);
console.log(names);

// Mutate array data
names[1] = 'Ben';
console.log(names)

names[5] = 'Mary';
console.log(names);

// Different Data types

var john = ['John', 'Smith', 1990, 'designer',
false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);

/*****
 * Coding Challenge 3
 


var tip = function(billAmount){
    if(billAmount < 50){
        return billAmount * .20;
    } 
    else if (billAmount > 50 && billAmount < 200){
        return billAmount * .15;
    } 
    else {
       return billAmount * .10;
    }   
}
console.log(tip(10));

/*var firstBill = 124;
var secondBill = 48;
var thirdBill = 268; 

var allTips = [tip(firstBill), tip(secondBill), tip(thirdBill)]
console.log(allTips);

var allBills = [firstBill + allTips[0], secondBill + allTips[1], thirdBill + allTips[2]]
console.log(allBills);


var bills = [124, 48, 268];
var tips = [tip(bills[0]), tip(bills[1]), tip(bills[2])];

console.log(tips)
console.log(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);

/**********
 * Objects
 

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);


//New object systax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';

console.log(jane);

/****
 * Methods
 

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);

/*****
 * Coding Challenge 4
 

var john = {
    mass: 100,
    height: 2,
    calcBmi: function(){
        this.bmi = (this.mass/(this.height*2))
        return this.bmi;
    }
}

var mark = {
    mass: 125,
    height: 2.3,
    calcBmi: function(){
        this.bmi = (this.mass/(this.height*2))
        return this.bmi;
    }
}

john.calcBmi();
mark.calcBmi();
console.log(john, mark);

if (john.bmi > mark.bmi){
    console.log('John has won with ' + john.bmi)
} else if (mark.bmi > john.bmi){
    console.log('Mark has won with ' + mark.bmi)
} else {
    console.log('It is a tie')
}

/******
 * Loops
 


var john = ['John', 'Smith', 1990, 'designer',
false];

for (var i = 0; i < john.length; i++){
   console.log(john[i]);
}

var i = 0
while(i < john.length){
    console.log(john[i]);
    i++
}

// continue and break statements


var john = ['John', 'Smith', 1990, 'designer',
false];

/*
for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

// lopping backwards

for (var i = john.length - 1 ; i >= 0; i--){    
    console.log(john[i]);
}

/****
 * Coding Challenge 5
 */
var allBills = [];
var allTips = [];

 var john = {
     fullName: 'John Smith',
     bills: [124, 48, 268, 180, 42],
     calcTips: function(){
         this.tips = [];
         this.finalValues = [];

         for (var i = 0; i < this.bills.length; i++){
             var percentage;
             var bill = this.bills[i]

            if (bill < 50){
                percentage = .2;
            } else if (bill > 51 && bill < 200){
                percentage = .15;
            } else {
                percentage = .10;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
     }
 }

john.calcTips();
console.log(john);









