function round(n){
    return n.toFixed(2);
}

function reverseWords(str){
    const words = str.split(' ');
    const reversedWords = words.reverse();
    return reversedWords.join(' ');
}

function onlyEven(arr){
    return arr.filter(n => n%2 === 0);
}

function isPalindrome(n) {
    const nString = String(n);
    const splittedString = nString.split('');
    const reversedString = splittedString.slice().reverse();
    const reversedStr = reversedString.join('');
    return nString === reversedStr;
}

function fizzBuzz(n) {
    return Array.from({ length: n }, (_, i) =>
        (i + 1) % 3 === 0 ? ((i + 1) % 5 === 0 ? 'FizzBuzz' : 'Fizz') :
            ((i + 1) % 5 === 0 ? 'Buzz' : String(i + 1)));
}
