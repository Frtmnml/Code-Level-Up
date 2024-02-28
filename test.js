function matrixChallenge (strArr){
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])

    for (let i = 0; i < strArr.length - 1; i++) {
        for (let j = 0; j < strArr[0].length - 1; j++){
            const square = strArr[i][j] + strArr[i][j + 1] + strArr[i + 1][j] + strArr[i + 1][j + 1];
            if([...square].every(char => vowels.has(char))){
                return `${i}-${j}`
            }
        }

    }

    return 'not found'

}



// Case 1:
console.log(matrixChallenge(["agrst", "ukaei", "ffooo"]))

// Case 2:
console.log(matrixChallenge(["gg", "ff"]))

// Case 3:
console.log(matrixChallenge(["abcd", "eikr", "oufj"]))