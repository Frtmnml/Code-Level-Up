function plusMinus(arr) {
    let positives = arr.filter((number) => number > 0);
    let negatives = arr.filter((number) => number < 0);
    let zero = arr.filter((number) => number === 0);
    let divPositive = positives.length
    let divNegative = negatives.length
    let divZero = zero.length
    let arrLength = arr.length
    
    
    // console.log("positive", positives)
    // console.log("negatives", negatives)
    // console.log('zero', zero)
    // //////
    // console.log("divPositive", divPositive)
    // console.log("divNegative", divNegative)
    // console.log('divZero', divZero)
    // console.log('divZero', divZero)
    // console.log('arrLength', arrLength)
    //////
    let operationPositive =  divPositive / arrLength;
    let operationNegative =  divNegative / arrLength;
    let operationZero = divZero / arrLength;
    
    console.log(operationPositive.toFixed(6))
    console.log(operationNegative.toFixed(6))
    console.log(operationZero.toFixed(6))
    
}

// Case 1
plusMinus([-4,3,-9,0,4,1])

