console.log("여기! 여기!");

// sum이라는 function의 실행 구문
// hoisting : 선언보다 먼저 실행구문이 와도 실행 가능
sum(10, 20);

// sum이라는 function의 정의 구문
function sum(num1, num2) {
    console.log(num1 + "+" + num2 + "=" + (num1 + num2));
}

function minus(num1, num2) {
    var result = num1 - num2;
    return result;
}

function concat(str1, str2) {
    return str1 + str2;
}

var numbers = [3, 4, 2, 8, 7];
function arySum() {
    var sum = 0;
    for(num of numbers) {
        sum += num;
    }
    return sum;
}

var mySum = function(){
    var sum = 0;
    for(num of numbers) {
        sum += num;
    }
    return sum;
}

function setBackgroundColor(element) {
    element.style.background = "pink";
}

