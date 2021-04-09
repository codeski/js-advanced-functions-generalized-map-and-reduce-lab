// Add your functions here

function map(src, aFunction) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
        r.push(aFunction(src[i])) 
    }
    return r
}

function reduce(src, aFunction, startingPoint){
    let r
    for (let i = 0; i < src.length; i++) {
        r = aFunction(src[i], i + 1)
    }
    if (startingPoint) {
        return r + startingPoint
    }
    return r
}
