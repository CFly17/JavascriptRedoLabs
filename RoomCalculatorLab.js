
function GetPerimeter(length, width) {
    return 2 * length + 2 * width;
}

function GetArea(length, width) {
    return length * width;
}

function GetPaint(perimeter) {
    return perimeter / 5;
}

function GetCarpet(area) {
    return area / 5;
}

function CalculateRoom() {
    let length = prompt("Please input a length");
    let width = prompt("Please input a width");
    let area = GetArea(length, width);
    let perimeter = GetPerimeter(length, width);
    let paintNeeded = GetPaint(perimeter);
    let carpetNeeded = GetCarpet(area);
    console.log("Your room has an area of " + area + " square feet.")
    console.log("Your room has a perimeter of " + perimeter + " feet.")
    console.log("You will need " + paintNeeded + " cans of paint to cover this room.")
    console.log("You will need " + carpetNeeded + " squares of carpet to cover this room.")
}