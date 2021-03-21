// DIRECTIONS
// Rewrite the following pieces of code from the last unit, but use functions when possible. 

// Temp Coversion App:
function tempConvert(){
    let degFahren = Number(prompt("Enter the degrees in Fahrenheit: "));
    let degCel = (5 / 9) * (degFahren - 32);
    let celcius = `${degFahren}\xB0 Fahrenheit is ${degCel}\xB0`;
    let msg = "";

    if (degFahren < 69) {
        msg = "Oh that's cold!";
    } 
    else if (degFahren >= 69) {
        msg = "Temperature is just right!";
    } 
    else {
        celcius = "";
        msg = "That's not a temperature";
    }

    document.getElementById('celcius').innerHTML = celcius;
    document.getElementById('msg').innerHTML = msg;
}


//Shopping Cart App:
function shoppingCart(){
    const userName = prompt("Let me ring you up! What is your name?");

    const item1 = prompt("Item 1 name:");
    let item1price = Number(prompt(`${item1} price:`));

    const item2 = prompt("Item 2 name");
    let item2price = Number(prompt(`${item2} price:`));

    const item3 = prompt("Item 3 name");
    let item3price = Number(prompt(`${item3} price:`));

    if (!item1price || item1price == 0) {
        item1price = Number(prompt(`${item1} price is not valid, please enter a price`));
    }
    if (!item2price || item2price == 0) {
        item2price = Number(prompt(`${item2} price is not valid, please enter a price`));
    }
    if (!item3price || item3price == 0) {
        item3price = Number(prompt(`${item3} price is not valid, please enter a price`));
    }

    const total = (item1price + item2price + item3price) * 1.0625;
    document.getElementById('total').innerHTML = `${userName}, your grand total is: $${total.toFixed(2)}.`
}