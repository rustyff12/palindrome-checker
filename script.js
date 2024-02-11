// Palindrome Checker

function palindrome(str) {
    let originalStr = "";
    let newStr = "";
    let alphaNum =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = str.length - 1; i >= 0; i--) {
        const newEl = str[i];
        if (alphaNum.includes(newEl)) {
            newStr += str[i];
        }
    }
    for (let j = 0; j < str.length; j++) {
        const origEl = str[j];
        if (alphaNum.includes(origEl)) {
            originalStr += str[j];
        }
    }
    return originalStr.toLowerCase() === newStr.toLowerCase() ? true : false;
}

palindrome("eye");

console.log(palindrome("eye")); // true.
console.log(palindrome("_eye")); // true.
console.log(palindrome("race car")); // true.
console.log(palindrome("not a palindrome")); // false.
console.log(palindrome("A man, a plan, a canal. Panama")); // true.
console.log(palindrome("never odd or even")); // true.
console.log(palindrome("nope")); // false.
console.log(palindrome("almostomla")); // false.
console.log(palindrome("My age is 0, 0 si ega ym.")); // true.
console.log(palindrome("1 eye for of 1 eye.")); // false.
console.log(palindrome("0_0 (: /- :) 0-0")); // true.
console.log(palindrome("five|_/|four")); // false.
