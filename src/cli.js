import readlineSync from 'readline-sync';
 export function greeting (){
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
 }
 
