// Task 1.1

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findElement(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return element;
        }
    }
}

console.log(findElement(arr, 4));


// Task 1.2

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function returnElement(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);
        }
    }

}

console.log(returnElement(arr));

// Task 2

function calculator(theFirstElement, theSecondElement, runner) {
    if (runner === "+") {
        return theFirstElement + theSecondElement;
    }
    else if (runner === "-") {
        return theFirstElement - theSecondElement;
    }
    else if (runner === "/") {
        return theFirstElement / theSecondElement;
    }
    else if (runner === "*") {
        return theFirstElement * theSecondElement;
    }
}

console.log(calculator(20, 10, "+"));