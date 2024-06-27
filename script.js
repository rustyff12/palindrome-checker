const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const resultBox = document.querySelector("#result");

const isPalindrome = (str) => {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
};

checkBtn.addEventListener("click", () => {
    const toCheck = textInput.value;
    if (toCheck === "") {
        alert("Please input a value");
        return;
    }

    checkResult(isPalindrome(toCheck));
});

const checkResult = (result) => {
    resultBox.textContent = "";

    const span = document.createElement("span");
    span.textContent = textInput.value;

    const text = result ? " is a palindrome" : " is not a palindrome";

    resultBox.appendChild(span);
    resultBox.appendChild(document.createTextNode(text));
};
