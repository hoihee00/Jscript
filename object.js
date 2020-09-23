let p1 = {name: "Hong", age: 30} // 가장 간단한 방식 (추천)

class Person {
    constructor(name, age) {
        this._name = name; // _는 private의 의미로 필드명 앞에 붙임
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
}

let p2 = new Person("Park", 30);
p2.name = "Choi";
p2.age = 25;
console.log(`name: ${p2.name} age: ${p2.age}`);

let p3 = new Person("Kim", 22);


function Student(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
}

let s1 = Student("Park", 3, 10);
let s2 = Student("Hong", 4, 11);
let s3 = Student("Lee", 5, 12);
