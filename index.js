// Add your functions here

function map(src, aFunction) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
        r.push(aFunction(src[i])) 
    }
    return r
}

function reduce(src, aFunction, startingPoint){
    if (startingPoint) {
        let value = startingPoint
    } 
    let r 
    for (let i = 0; i < src.length; i++) {
        r = aFunction(src[i])
    }
    return r
}
