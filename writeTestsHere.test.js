const getSum = require('./1')

describe('getSum function:', () => {
    test('should sum 3 positive numbers of  the array', () => {
        const arr = [1, 2, 3]
        expect(getSum(arr)).toBe(6)
    })

    test('should sum 2 positive and 1 negative numbers of the array', () => {
        const arr = [-1, 2, 3]
        expect(getSum(arr)).toBe(4)
    })

    test('should sum the fractional, positive and negative numbers of the array', () => {
        const arr = [0.1, -2, 3]
        expect(getSum(arr)).toBe(1.1)
    })

    test('should return the sum of number from the array of one number', () => {
        const arr = [7]
        expect(getSum(arr)).toBe(7)
    })

    test('should sum fructional numbers from the array', () => {
        const arr = [0.1, 0.3, 0.3]
        expect(getSum(arr)).toBe(0.7)
    })
})



const arithmetic = require('./2')

describe('arithmetic function:', () => {
    test('should sum 2 numbers', () => {
        expect(arithmetic(6, 3, 'add')).toBe(9)
    })
    test('should subtract 2 numbers', () => {
        expect(arithmetic(12, 3, 'subtract')).toBe(9)
    })
    test('should multiply 2 numbers', () => {
        expect(arithmetic(7, 3, "multiply")).toBe(21)
    })
    test('should divide 2 numbers', () => {
        expect(arithmetic(16, 4, 'divide')).toBe(4)
    })
    test('default value', () => {
        expect(arithmetic(5, 6, 'default')).toBe('No such result')
    })
})



const checkNumber = require('./3')

describe('checkNumber function:', () => {
    test('returns false for odd number', () => {
        expect(checkNumber(7)).toBe(false)
    })
    test('returns true for even number', () => {
        expect(checkNumber(8)).toBe(true)
    })
    test('returns false for negative odd number', () => {
        expect(checkNumber(-5)).toBe(false)
    })
    test('returns true for negative even number', () => {
        expect(checkNumber(-2)).toBe(true)
    })
    test('returns true for 0', () => {
        expect(checkNumber(0)).toBe(true)
    })
})