function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false"
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return " Yes, that was true";
    }
    return "NO, that was false";
}

console.log(trueOrFalse(true));

function testEqual(val) {
    if (val == 12) {
    }
    return "Not Equal";
}

console.log(testEqual(10));

function testStrict(val) {
    if (val ===7) {
    }
    return "not equal"
}

console.log(testStrict(10));


function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, "10"));


function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(10));

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or over";
    }
    
    if (val >= 10) {
        return "10 or over";
    }
}

console.log(testGreaterOrEqual(15));

function testLessOrEqual(val) {
    if (val <= 25) {
        return "Smaller Than or Equal to 25";
    }

    if (val <= 55) {
        return "Smaller Than or Equal to 55";
    }

    return "More Than 55";
}

console.log(testLessOrEqual(24));

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(10));

function testLogicalOr(val) {
    
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

console.log(testLogicalOr(15));


function testElse(val) {
    var result = '';

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or smaller";
    }
    return result;

}

console.log(testElse(2));

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "smaller than 5";
    } else {
        return "Between 5 and 10";
    }

}

console.log(testElseIf(7));

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "less than 10";
    }
}


console.log(orderMyLogic(3));

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num <15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }

}

console.log(testSize(25));

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes <= par - 1) {
        return names[2]
    } else if (strokes <= par) {
        return names[3]
    } else if (strokes <= par + 1) {
        return names[4]
    } else if (strokes <= par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return names[6]
    }
}

console.log(golfScore(5, 7));

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "stuff";
            break;
    }

    return answer;
}

console.log(caseInSwitch(7));


function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

console.log(sequentialSizes(7));

function chainToSwitch(val) {
    var answer = "";

    switch (val) {

        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much";
            break;
        case 7:
            answer = "Ate Nine";
            break;

    }
}

console.log(chainToSwitch("1"));

function isLess(a, b) {
    return a < b;
}

console.log(isLess(20, 15));


function abTest(a, b) {

    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    
}

console.log(abTest(-2,2));


var count = 0;

function cc(card) {

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    
    }
    
    var holdBet = 'Hold'
    if (count > 0) {
        holdBet = 'Bet'
    }

     return count + " " + holdBet;

}

cc(2); cc('K'); cc(10); cc('K'); cc('A');

console.log(cc(4));

// Objects in JS 

var ourDog = {
    "name": "camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

console.log(ourDog);


var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cheats",
};

var hatValue =  testObj.hat;
var shirtValue = testObj.shirt;

console.log(testObj);


var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];


var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];


var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog['bark'] = "woof!";

delete myDog.bark;

 function phoneticLookup(val) {
     var result = "";
     
     var lookup = {
         "alpha": "Adams",
         "bravo": "Boston",
         "charlie": "Chicago",
         "delta": "Denver",
         "echo": "Easy",
         "foxtrot": "frank"
     };

     result = lookup[val];

     return result;
 }

 console.log(phoneticLookup("echo"));

 var myObj = {
     gift: "pony",
     pet: "kitten",
     bed: "sleigh"
 };

 function checkObj(checkProp) {

     if (myObj.hasOwnProperty(checkProp)) {
         return myObj[checkProp];
        
     } else {
         return "Not Found"
     }
 }

console.log(checkObj("hello"));

var myMusic = [
    {
        "artist": "Billy Jorl",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },

    {
        "artist": "Beau carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "Youtube video"
        ]
    }
]

console.log(myMusic);

var myStorage = {
    "car": {
        "inside": {
         "glove box": "maps",
         "passenger seat": "crumbs"
        },
        "outsiide":{
         "trunk":"jack"
        }
    }

};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];

console.log(secondTree);

var collection = {
    "2468": {
        "album": "Slippery When Wet",
        "artist": "Bon Jov",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1990",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Covette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];

    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else {
        collection[id][prop] = value;
    }

    return collection;
}
updateRecords(2468, "tracks", "test"); 

console.log(updateRecords(5439, "artist", "ABBA"));

 //Loops

var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);

var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}

console.log(ourArray);

var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray);

var myArray = [];

for (var i = 9; i > 0; i-= 2)  {
    myArray.push(i);
}

console.log(myArray);

var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);

function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product);

var myArray = [];
var i = 10;

do {
    myArray.push(i); 
    i++;
} while (i < 5)

console.log(i, myArray);

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes":
        ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Porter",
        "number": "0994372684",
        "likes":
        ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "048745643",
        "likes":
        ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unkown",
        "likes":
        ["Javascript", "Gaming", "Foxes"]
    }

];

function lookUpProfile(name, prop) {
    for (var i =0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "no such property";
        }
    }
    return "No such contact"
}

var data = lookUpProfile("Biscuits", "Hello")

console.log(data);

function randomFraction() {
    

    return Math.random();
}

console.log(randomFraction());

function randomWholeNum() {
    

    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());


function randomRange(myMin, myMax) {
    
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);

console.log(myRandom);

function convertToInteger(str) {
    return parseInt(str);

}

console.log(convertToInteger("56"));

function convertToInteger(str) {
    return parseInt(str, 2);

}

console.log(convertToInteger("10011"));

function checkEqual(a, b) {
    return a === b;
}

console.log(checkEqual(2, 2));


 


function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool";


    for (let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }

}

console.log(printManyTimes("freeCodeCamp"));

const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}

editInPlace();

console.log(s);

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

const magic = () => new Date();

console.log(magic());

const myContact = (arr1, arr2) => arr1.concat(arr2);

console.log(myContact([1, 2], [3, 4, 5]));

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num >0).map(x => x * x);
    return squaredIntegers;

};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})() ;

console.log(increment(5, 2));
console.log(increment(5));

