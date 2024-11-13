{
  //function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  type User = { id: number; name: string };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");
  const resGenericObj = createArrayWithGeneric<object>({
    id: 222,
    name: "shafin",
  });

  const addCourseToStudent = <T>(Student: T) => {
    const course = "Next Level web Development";

    return {
      ...Student,
      course,
    };
  };
  const student1 = addCourseToStudent({
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });
}
