function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 4));
var mySum = function (num1, num2 /*no error*/) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum(5, 3));
function getName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
//question mark makes it optional. Howeber if nothing is passed
//it will print undefined. If that is a possiblity it should be
//checked inside the function with an if statement
//e.g. !lastName ? return firstname : return firstaNme + ' ' + lastName
console.log(getName('Tyler', 'Durden'));
// A function that returns void
function myVoidFunction() {
    return;
}
