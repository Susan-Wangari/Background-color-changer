// declare a function colorChange
const colorChange = () => {
    let characters = "1234567890ABCDEF";
    let symbol = "#";
    for (let i = 0; i < 6; i++) {
        symbol = symbol + characters[Math.floor(Math.random() * 16)];
        // multiply by 16 because the length of no is 16,it is a string value
    }
    document.body.style.background = symbol;
}

setInterval(colorChange, 1500);
// color change is the function name and 1500 the animation time