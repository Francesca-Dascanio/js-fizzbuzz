let message;

//Stampa numeri da 1 a 100
for (let n=1; n <= 100; n = n + 1) {
    message = n;
    


    // Se il numero diviso 5 e 3 fa zero (quindi è multiplo di 5 e di 3) allora quel numero compare come testo FizzBuzz
    if ((n % 5 == 0) && (n % 3 == 0)) {
        message = 'FizzBuzz';
    }
    // Se il numero diviso 3 fa zero (quindi è 3 o multiplo di 3) allora quel numero compare come testo Fizz
    else if (n % 3 == 0) {
        message = 'Fizz';
    }

    // Se il numero diviso 5 fa zero (quindi è 5 o multiplo di 5) allora quel numero compare come testo Buzz
    else if (n % 5 == 0) {
        message = 'Buzz';
    }
    console.log(message);


}



