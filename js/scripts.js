var a = prompt('Podaj długość boku:'),
    h = prompt('Podaj wysokość:'),
    triangleArea = a * h / 2;



//Check if length ang height is bigger than ZERO. If TRUE then print result     
if (( a > 0 ) && ( h > 0 ))
    console.log("Pole trójkąta o boku a = " + a + " i wysokości h = " + h + " wynosi P = " + triangleArea);

// If length 'a' or height 'h' is ZERO or less then ERROR . 
else 
    {
        alert("Nieprawidłowe dane wejściowe");    
        if (a <= 0) // Lenght is invalid. 
            console.log("Nie można obliczyć pola trójkąta o długości boku a = " + a + " ! Długość musi być większa o zera!");
        if (h <= 0) // Height id invalid.
            console.log("Nie można obliczyć pola trójkąta o wysokości h = " + h + " ! Wysokość musi być większa o zera!");
    }