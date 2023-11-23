function sumDiv(inputNumber){

    if(isNaN(inputNumber))
        throw new Error("Entrada inválida, somente números inteiros");

    if(inputNumber < 1)
        throw new Error("Entrada inválida, somente números positivos maiores que 0");
    
    let countResult = 0;
    for(let i = inputNumber; i > 0; i--){
        if(i != inputNumber)
            if(!(i % 3))
                countResult+=i;
            else if (!(i % 5))
                countResult+=i
    }

    return countResult;
}

function exec(e){
    e.preventDefault();
    const inputel = document.querySelector("#number-input");
    const outputel = document.querySelector("#output");

    let result = 0;
    try{
        result = sumDiv(parseInt(inputel.value));
    }catch(e){
        alert(e);
    }

    outputel.innerHTML = result;
}