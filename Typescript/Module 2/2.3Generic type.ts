{
  //generic type

  type GenericArray<T> = Array<T>;

  //const rollNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5, 6, 7, 8];

  //const mentors: string[] = ["Mr.x,Mr.y,Mr.z"];
  const mentors: Array<string> = ["Mr.x,Mr.y,Mr.z"];

  //const boolArray: boolean[] = [true, false];
  const boolArray: Array<boolean> = [true, false];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "John",
      age: 25,
    },
    {
      name: "Jane",
      age: 30,
    },
  ];

  const add = (x: number, y: number) => x + y;
  add(30, 20);

  //generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr.x", "Mr.y"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "persian", email: "persian@gmail.com" },
  ];
}
