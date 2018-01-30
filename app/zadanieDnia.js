const [ url1, url2, ..args ] = process.argv;
args.forEach((number) => {
    const number2 = parseInt(number);
    setTimeout(() => {
        console.log(number2);
    }, (number2 * 1000));
});