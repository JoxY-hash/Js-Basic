//  // this is my first javascript code!
// //  console.log('Hello World')
// let name = 'josiane';
// console.log('josiane');

// let a = 400;
// let b = 500;
// console.log(a + b);

// let firstName = 'nikuze';
// let lastName = 'josiane';
//  let interestRate = 0.3;
//  interestRate = 1; 
//  console.log(interestRate);

//  let selectColor =['red','black']
//  console.log(selectColor);

//  let myAge = 24;
//  let laterYears = myAge - 2; // Subtracting the first two years.
//  console.log(myAge - 2);

// const myAge = 24; // humana age number literal
 
 
//  let earlyYears = 2;//  The first two years of a dog's life
 
//  earlyYears 2 * 10.5 = 21; // First two years of dog life account for 10.5 dog years each
 
//  let myAge = 24;
//  let laterYears = 22; // Subtracting the first two years.
 
//  laterYears 22 *4= 88; // Each year after the first two is equivalent to 4 dog years
 
//  console.log('Early Years (dog years):', earlyYears);
//  console.log('Later Years (dog years):', laterYears);
//  Early Years (dog years) 21;
//  Later Years (dog years) 88;
 

// let myAgeInDogYears = 110; // Adding the early years and later years to get the total dog years

// let myName = 'Nikuze Josiane'.toLowerCase(); // Convert name to lowercase
// result = nikuze josiane .toLowerCase();

// console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
// y name is nikuze josiane. I am 24 years old in human years which is 110 years old in dog years.


// 8 human years = 45 dog years.
// 22 human years = 110 dog years.

// let person  = {
//     name:'Josiane'
//     Age : 32
// };
//     console.log(person);
//     function calculate BMI(90,1.70){
//         return weight/height*height;
//       }
//       console.log(calcula

function checkEvenOdd(input){
    if (typeof input ==='number' && Number.isInteger(input)){
        return input % 2 ===0 ? "Even":"Odd";
    }else{
        return "Not a valid number";
    }
}
console.log(checkEvenOdd(2));
console.log(checkEvenOdd(1));
console.log(checkEvenOdd("text"));

function calculateAreaOfRectangle(l,w){
    return l*w;
}
console.log(20,30)

function averageOf4Numbers(m1,m2,m3,m4){
    return ((m1+m2+m3+m4)/4)
}
console.log(averageOf4Number(12,16,32,36))

function minutesToHours(min){
    return min/60
}
console.log(minutesToHours(120));



