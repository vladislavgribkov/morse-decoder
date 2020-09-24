const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let count = '';
    let outCount = '';
    label:for(let i = 1; i<=expr.length; i++){
       count += expr[i-1];
       if(i%10 === 0 && i!==0){
         if(count !== '**********'){
           outCount+= MORSE_TABLE[getWorldOrNumber(count)];
         }else{
           outCount+=' ';
         }
         count = '';
         continue label;
       }
    }
    return outCount;
}
let getWorldOrNumber = (str) =>{
    let outCount = '';
    let count = '';
    label:for(let i = 1; i<=str.length; i++){
      count += str[i-1];
      if(i%2 === 0 && i!==0){
        if(count==='00'){
          outCount += '';
        }
        if(count ==='10'){
          outCount+='.'
        }
        if(count ==='11'){
          outCount+='-'
        }
        count = ''
        continue label;
      }
   }
   return outCount;
  }
module.exports = {
    decode
}