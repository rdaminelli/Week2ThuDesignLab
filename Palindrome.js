function palindrome(str){
    let strpalindrome = "";
    for(let i = str.length - 1; i >= 0; i--){
        strpalindrome += str[i];
    }
    return str === strpalindrome
}

console.log(palindrome('Racecar'))
console.log(palindrome('racecar'))
