console.log('Wygląda na to, że wszystko działa :)');
setTimeout(() => {
    //Funkcja wykona się po 2s.
}, 2000);
setInterval(() => {
    //Funkcja wykona się co 1s.
}, 1000);

const text = 'Hello, World!';

let counter = 0;
//Program wyświetla po znaku z tekstu...
const intervalId = setInterval(() => {
    console.log(text[counter]);
    counter++;
    
    //...ręcznie musimy mu powiedzieć kiedy należy przerwać wykonywanie - wtedy proces Node.js się zakończy
    if (counter === text.length){
        clearInterval(intervalId);
    }
}, 400);
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });