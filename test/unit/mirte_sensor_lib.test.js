const isEven = require('mirte_sensor_lib.js')

test('2 is even', () => {
  expect(isEven(2)).toBe(true)
})

test('1 is odd', () => {
  expect(isEven(1)).toBe(false)
})

test('strings are not numbers, and therefore not even', () => {
  expect(isEven('words')).toBe(false)
})
