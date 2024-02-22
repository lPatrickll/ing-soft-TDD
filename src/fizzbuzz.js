function generarFizzBuzz(n) {
    const FIZZ = 3;
    const BUZZ = 5;

    if (n % FIZZ === 0)
        return "fizz";

    if (n % BUZZ === 0)
        return "buzz";
    
    return n + "";
}

export default generarFizzBuzz;
