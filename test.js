test("Позитивный",() =>{
const formformDate = {
  FIO: "Галашин Даниил Юрьевич",
  numbert: "+79623836676",
  email: "andrey@gmail.com",
  date: "30.06.2024",
  number: "2"
}
expect((formformDate).toBe("Форма заполнена отлична"))

});

test("Негативный",() =>{
  const formformDate = {
    FIO: "Галашин Даниил Юрьевич41414241214",
    numbert: "+79623836676",
    email: "andrey@gmail.com",
    date: "30.06.2024",
    number: "2"
  }
  expect((formformDate).toBe("Форма заполнена с ошибкой"))
  
  });
  test("Позитивный",() =>{
    const formformDate = {
      FIO: "Галашин Даниил Юрьевич",
      numbert: "+79623832316",
      email: "andrey@gmail.com",
      date: "13.07.2024",
      number: "52"
    }
    expect((formformDate).toBe("Форма заполнена отлична"))
    
    });
    test("Негативный",() =>{
      const formformDate = {
        FIO: "Галашин Даниил Юрьевич",
        numbert: "+79623836676",
        email: "andreygmail.com",
        date: "30.06.2024",
        number: "2"
      }
      expect((formformDate).toBe("Форма заполнена отлична"))
      
      });
      test("Позитивный",() =>{
        const formformDate = {
          FIO: "Галашин Даниил Юрьевич",
          numbert: "+79623836676",
          email: "andreygmail.com",
          date: "30.06.2024",
          number: "-1"
        }
        expect((formformDate).toBe("Форма заполнена с ошибкой"))
        
        });
              test("Позитивный",() =>{
        const formformDate = {
          FIO: "Галашин Даниил Юрьевич",
          numbert: "+79623836676",
          email: "andreygmail.com",
          date: "30.06.2024",
          number: "-1"
        }
        expect((formformDate).toBe("Форма заполнена с ошибкой"))
        
        });