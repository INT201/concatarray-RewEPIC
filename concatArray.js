const { template } = require('@babel/core')

function concatArray(array1, array2) {
    return (!array1 && !array2) ? undefined : (array1??[]).concat(array2??[])
}
module.exports = concatArray
