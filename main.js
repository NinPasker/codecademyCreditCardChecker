// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

// Function to validate a credit card number
const validateCard = array => {
    // Creating an array for my non-doubled elements
    let checkArray = [];
    // Creating an array for my to-be doubled elements
    let otherNumberArray = [];
    // Creating an array for my doubled elements
    let doubledNumberArray = [];

    // Loop to get the non-doubled elements while looping backwards
    for (let checkIndex = array.length - 1; checkIndex >= 0; checkIndex -= 2){
        checkArray.push(array[checkIndex]);
    }
    // Loop to get the elements we want to double while looping backwards.
    for (let i = array.length - 2; i >= 0; i -= 2){
        otherNumberArray.push(array[i]);
    }

    // Loop to check each doubled element if it is greater than 9
    for (let index = 0; index < otherNumberArray.length; index++) {
        let doubledNumber = otherNumberArray[index] * 2;
        if (doubledNumber > 9) {
            doubledNumberArray.push(doubledNumber - 9);
        } else {
            doubledNumberArray.push(doubledNumber);
        }
    }

    // Adding the element items from each array
    let sum1 = checkArray.reduce((psum, a) => psum + a, 0);
    let sum2 = doubledNumberArray.reduce((psum, a) => psum + a, 0);
    // Adding the array total's together
    let totalSum = sum1 + sum2;

    // Checking to see if the credit card number is valid
    if (totalSum % 10 === 0) {
        return true;
    } else {
        return false;
    }
};

// Function to find invalid card numbers
const findInvalidCards = nestedArray => {
    let invalidCards = [];

    for (let i = 0; i < nestedArray.length; i++) {
        if (validateCard(nestedArray[i]) === false){
            invalidCards.push(nestedArray[i]);
        }
    }
    return invalidCards;
}

// Fuction to identify invalid numbers with companies that issued them
const idInvalidCompanies = nestedArray => {
    let companies = [];

    for (let i = 0; i < nestedArray.length; i++) {
        if (nestedArray[i][0] === 3) {
            companies.push(`Amex (American Express)`);
        } else if (nestedArray[i][0] === 4) {
            companies.push(`Visa`);
        } else if (nestedArray[i][0] === 5) {
            companies.push(`Mastercard`);
        } else if (nestedArray[i][0] === 6) {
            companies.push(`Discover`);
        } else {
            console.log(`Company not found`);
        }
    }

    let finalCompanyList = new Set(companies);

    return finalCompanyList;
}

// Turning string input to an array of numbers
const stringToArray = string => {
    let newCardArray = [];

    for (let i = 0; i < string.length; i++) {
        newCardArray.push(parseInt(string[i]));
    }
    
    return newCardArray;
}

// Creating a function to turn invalid cards into valid ones (Copy and pasted validateCard function and modified the if statement)
const makeValidNumbers = invalidArray => {
    let nowValidCard = [];

    // Creating an array for my non-doubled elements
    let checkArray = [];
    // Creating an array for my to-be doubled elements
    let otherNumberArray = [];
    // Creating an array for my doubled elements
    let doubledNumberArray = [];
    
    // Loop to get the non-doubled elements while looping backwards
    for (let checkIndex = invalidArray.length - 1; checkIndex >= 0; checkIndex -= 2){
        checkArray.push(invalidArray[checkIndex]);
    }
    // Loop to get the elements we want to double while looping backwards.
    for (let i = invalidArray.length - 2; i >= 0; i -= 2){
        otherNumberArray.push(invalidArray[i]);
    }
    
    // Loop to check each doubled element if it is greater than 9
    for (let index = 0; index < otherNumberArray.length; index++) {
        let doubledNumber = otherNumberArray[index] * 2;
        if (doubledNumber > 9) {
            doubledNumberArray.push(doubledNumber - 9);
        } else {
            doubledNumberArray.push(doubledNumber);
        }
    }
    
    // Adding the element items from each array
    let sum1 = checkArray.reduce((psum, a) => psum + a, 0);
    let sum2 = doubledNumberArray.reduce((psum, a) => psum + a, 0);
    // Adding the array total's together
    let totalSum = sum1 + sum2;
    
    // Checking to see if the credit card number is valid if not change it to be valid
    if (totalSum % 10 === 0) {
        return true;
    } else {
        let remainder = totalSum % 10;

        invalidArray[invalidArray.length - 1] -= remainder;
        for (let invalidIndex = 0; invalidIndex < invalidArray.length; invalidIndex++){
            nowValidCard.push(invalidArray[invalidIndex]);
        }
        
        return nowValidCard;
    }

}

// Uncomment the lines below to run tests on the code.

// console.log(validateCard(stringToArray('5519660332600505')));
// console.log(makeValidNumbers(invalid1));

// Programmed by Nin Pasker.

