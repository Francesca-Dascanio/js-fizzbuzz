let message;

//Stampa numeri da 1 a 100
for (let n=1; n <= 100; n = n + 1) {
    message = n;
    

    // Se il numero diviso 3 fa zero (quindi è 3 o multiplo di 3) allora quel numero compare come testo Fizz
    if (n % 3 == 0) {
        message = 'Fizz';
    }
    console.log(message);


}



