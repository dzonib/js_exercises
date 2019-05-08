function addTo80(n) {
    console.log('long load...')
    return n + 80
}

const cashe = {}

function cashingAddTo80(n) {
    if (n in cashe) {
        return cashe[n]
    } else {
        console.log('long load...')
        cashe[n] = 80 + n
        return cashe[n]
    }
}



console.log(cashingAddTo80(30))
console.log(cashingAddTo80(30))
console.log(cashingAddTo80(40))
console.log(cashingAddTo80(40))
console.log(cashingAddTo80(40))
console.log(cashingAddTo80(40))
