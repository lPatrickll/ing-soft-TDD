function generarFizzBuzz(n) {
    const FIZZ = 3;

    if (n % FIZZ === 0)
        return "fizz";

    if (n === 5)
        return "buzz";
    
    return n + "";
}

export default generarFizzBuzz;
