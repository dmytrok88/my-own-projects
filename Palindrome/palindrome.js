
function isPalindrome(string){
let bohdan = string;
let dimon = '';

for (let i = string.length -1; i >= 0; i--) {
  dimon += string[i];
  }

console.log(bohdan);  
console.log(dimon);

if (bohdan === dimon) {
  console.log('boombareshka')
}
};

isPalindrome('aBBa')