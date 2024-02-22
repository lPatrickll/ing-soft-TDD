import generarFizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("deberia generar el mismo numero que no tiene reglas por ejemplo el 1", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });

  it("deberia generar el mismo nro. para otro nro. que no tiene reglas como el 2", () => {
    expect(generarFizzBuzz(2)).toEqual("2");
  });
  
  it("deberia generar fizz para un nro. que tiene la reglas como el 3", () => {
    expect(generarFizzBuzz(3)).toEqual("fizz");
  });
});