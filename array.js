var students = []; // 배열 선언

students.push("김현동"); // 뒤에 추가
students.push("김현동"); // 뒤에 추가
students[1] = "김도은"; // 주소값 추가
students.unshift("김다희"); // 앞에 추가
// -> 김다희, 김현동, 김도은

// students.pop(); // 뒤에서부터 제거
// students.shift(); // 앞에서부터 제거
// console.log(students[0]);
// console.log(students[1]);

students.splice(1,0,"이광호","동광희"); // 해당 인덱스 위치의 해당 개수만큼 값 잘라내기 또는 추가
for (student of students) {
    console.log(student);
}

console.log("-----------------------");

var newStu= students.slice(1,3); // 1st~3rd index 사이의 값 (1st, 2nd index). 단, 3rd index 미포함
for (student of newStu) {
    console.log(student);
}

console.log("-----------------------");
students.sort();
for (student of students) {
    console.log(student);
}

console.log("-----------------------");
var numbers = [4, 6, 2, 9, 1, 10, 100];
numbers.sort(function(a, b){
    console.log(a, b); // 실행 과정 보기
    return a - b;  // -값 -> 오름차순 정렬 (내림차순 : b - a)
});
for(num of numbers) {
    console.log(num);
}

