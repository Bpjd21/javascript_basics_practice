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
 */

 















