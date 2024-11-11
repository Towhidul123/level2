{
  //interface

  // type vs interface
  // for all primitive types we use type alias and for object type we can use both type alias and interface type

  type rollNumber = number;

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user1: UserWithRole1 = {
    name: "John Doe",
    age: 30,
    role: "manager",
  };

  //js --> object , array -> object fuction -> object

  type Roll1 = number[];

  interface Roll2 {}
  const rollNumber1: Roll1 = [1, 2, 3];

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;
}
