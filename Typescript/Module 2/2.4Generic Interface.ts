{
  //Generic Interface

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }

  const poorDeveloper: Developer<> = {
    name: "John Doe",
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      releaseYear: 2021,
    },
    smartWatch: {
      brand: "Apple",
      model: "Watch Series 6",
      display: "OLED",
    },
  };
}
