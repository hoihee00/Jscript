var sum = 0;

function aryFunc() {
    var numbers = [45, 28, 22, 10, 55];

    // numbers.forEach(function(value, index, array) {
    //     console.log(value, index, array);
    //     sum += value;
    // });

    numbers.forEach(callBackFunc);

    console.log(sum);
    document.getElementById("ary").innerHTML = sum;
}

function callBackFunc(v, i, a) {
    sum += v;
}

var num1 = 10;
var num1 = "hello";
console.log(num1);

let num2 = 10;
// let num2 = "hello";
console.log(num2);

const num3 = 10; // 값 할당 후 변경 불가능

let p1 = {
    name: "Hong",
    age: 20
}

let p2 = {
    name: "Park",
    age: 25
}

let p3 = {
    name: "Choi",
    age: 30
}

let persons = [p1, p2, p3]
persons.forEach(function (a, b, c) {
    // console.log(a, b, c);
    // console.log(a.name + ", " + a.age);
});

persons.sort(function (a, b) {
    if (a < b) return -1;
    else return 1;
    // return b.age - a.age;
});

persons.forEach((a, b, c) => {
    console.log(`value: ${a.name}, index: ${a.age}, index: ${b}`);
});

// 최소값~최대값으로 정렬
numbers = [45, 38, 66, 92, 18, 100];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers[0]);

console.log("-----------------------------------------")

let newNum = numbers.map(function (a, b, c) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    return a * b;
})
console.log(newNum);

let theNew = newNum.filter(function (a, b, c) {
    return a > 0;
});

console.log(theNew);
let anotherNew = theNew.reduce((a, b, c) => {
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    if(a>b)
        return a;
    else    
        return b;
});
console.log(anotherNew);



