// comece a criar a sua função add na linha abaixo
function add (n1, n2){
    return (n1+n2)
}

// descomente a linha seguinte para testar sua função
//console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
// adicionar n2, n1 vezes
function multiply (n1, n2){
    let total = 0
    
    for (i = 0; i < n1; i++){
        total = add(total, n2)
    }
    return(total)   
} 

// descomente a linha seguinte para testar sua função
//console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
// multiplicar x * x, n vezes
function power (x, n){
    let total = 1 // = 1 para satisfazer a condição de que todo número elevado a 0 é 1

    for (let i = 0; i < n; i++){
        total = multiply(total, x)
    }
    return(total)    
}

// descomente a linha seguinte para testar sua função
//console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial (n){
    let fat = 1; // =1 para satisfazer a condição de que todo fatorial de 0 é 1;

    for (let i = n; i > 0; i--){
        fat = multiply(fat, i)
    }
    return(fat)
}

// descomente a linha seguinte para testar sua função
//console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci (n){
    let listaNum = []
  

    for (let i = 0; i <= n; i++){
        listaNum [i] = i 

        if (listaNum[i] > 1){
            listaNum[i] = add(listaNum[(i-2)],listaNum[i-1])    
        }
    }
    return (listaNum) // n-1 para satisção da condição interpretando que a a contagem dos elementos da lista começa por 1, 2, 3, 4...
}
// descomente a linha seguinte para testar sua função
//console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
