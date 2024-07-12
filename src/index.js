module.exports = function reverse (n) {
    const nString = String(Math.abs(n))
    const result = nString.split('').reverse().join('')
    return result
}
