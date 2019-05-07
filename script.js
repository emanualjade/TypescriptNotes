"use strict";
var Person = /** @class */ (function () {
    function Person(firstName) {
        this.firstName = firstName;
    }
    Person.prototype.greet = function (name) {
        console.log("Hello " + name);
    };
    return Person;
}());
var person = new Person("Johnny");
var myDoubleFunc;
myDoubleFunc = function (value1, value2) {
    return (value1 + value2) * 2;
};
var sparky = {
    name: "sparky",
    bark: function () {
        console.log('woof');
    }
};
// =========== GENERICS
function echo(data) {
    return data;
}
console.log(echo(23));
console.log(echo("hello"));
console.log(echo({ name: "max" }));
function betterEcho(data) {
    return data;
}
console.log(betterEcho(23));
console.log(betterEcho(23));
console.log(betterEcho("hello"));
console.log(betterEcho({ name: "max" }));
// ========= BUILT IN GENERICS
var testResults = [99, 100, 97];
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["apple", "banana"]);
printAll(["apple", "banana"]);
// Generic types
var echo2 = betterEcho;
// Generic Classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath(baseValue, multiplyValue) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }
    SimpleMath.prototype.calculate = function () {
        // explicity cast these values to a number with the + symbol
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath("10", 20);
simpleMath.calculate();
// Generic Map Class
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem("apples", 10);
numberMap.setItem("oranges", 5);
var stringMap = new MyMap();
stringMap.setItem("apples", "10");
stringMap.setItem("oranges", "5");
$('button').onClick(function () { console.log('clicked'); });
function logAndReturn(arg) {
    console.log(arg.length);
    return arg;
}
