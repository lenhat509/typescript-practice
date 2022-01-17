let a: number;
a = 10;
let b = 5;

const addition = (num1: number | unknown, num2: number):(void | number) => {
    console.log( num2);
}

addition(a,b);

let student: (string | number)[] = ['a', 'b', 'c', 1];

student.splice(2, 0, 3);
console.log(student);
//tuple
let std: [string, number, string] = ['a', 1 , 'b'];

//Enum
enum Direction {N, S, E, W};

interface Student { 
    name: string, 
    age: number, 
    enrolled: boolean,
  };
interface Student {
    course?: string
  }
let newStudent:Student = {name: 'Maria', age: 10, enrolled: true};
let newStudent1:Student = {name: 'Maria', age: 10, enrolled: true, course: "ComScience"};

interface MaleStudent extends Student {
    height:number,
    readonly id:number
}
let maleStu1:MaleStudent = {name: 'Maria', age: 10, enrolled: true, height: 1.5, id: 12}

// Type Aliases: dont create new type, it rename a type
// Once it is created, it can not be added but extended
// Preferred for tuple and union type
type Name = string;
type Person = Student | MaleStudent;
type Pupil = {
  name: string,
  age: number
}
//can only be extended with a different name
type CollegePupil = Pupil & {
  readonly id: number
}

const nhat:CollegePupil = {name: "Nhat", age: 20, id: 112};
