import { analyzeArray, caesarCipher, calculator, capitalise, reverseString } from "./functions"

test('Capitalise', () => {
    expect(capitalise('test')).toBe('Test')
    expect(capitalise('the first word should be capitalised')).toBe('The first word should be capitalised')

})

test('Reverse String', () => {
    expect(reverseString('test')).toBe('tset')
    expect(reverseString('This string is reversed')).toBe('desrever si gnirts sihT')
})

test('Calculator ADD', () => {
    expect(calculator.add(2,2)).toBe(4)
    expect(calculator.add(84,27)).toBe(111)    
})

test('Calculator SUBTRACT', () => {
    expect(calculator.subtract(5,3)).toBe(2)
    expect(calculator.subtract(67, 23)).toBe(44)
})

test('Calculator DIVIDE', () => {
    expect(calculator.divide(6,3)).toBe(2)
    expect(calculator.divide(66, 3)).toBe(22)
})

test('Calculator MULTIPLY', () => {
    expect(calculator.multiply(3,10)).toBe(30)
    expect(calculator.multiply(67, 23)).toBe(1541)
})

test('Cypher', () => {
    expect(caesarCipher('Test', 0)).toBe('Test')
    expect(caesarCipher('Space&Symbol Test', 3)).toBe('Vsdfh&Vbpero Whvw')
    expect(caesarCipher('Backwards Test', -1)).toBe('Azbjvzqcr Sdrs')
})

test('Object Values', () => {
    const object = analyzeArray([1,8,3,4,2,6])
    expect(object.average).toBe(4)
    expect(object.min).toBe(1)
    expect(object.max).toBe(8)
    expect(object.length).toBe(6)
})