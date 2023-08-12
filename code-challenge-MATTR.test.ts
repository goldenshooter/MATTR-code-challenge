import { getLongestSubarray } from './code-challenge-MATTR'

describe('getLongestSubarray', () => {
  it('should return an empty array if input is not an array', () => {
    const inputArray = 'not an array'
    const expectedOutput = undefined
    // @ts-ignore
    expect(getLongestSubarray(inputArray)).toEqual(expectedOutput)
  })

  it('should return the longest subarray of random numbers', () => {
    const inputArray = [6, 1, 5, 2, 9]
    const expectedOutput = [1, 5, 9]
    expect(getLongestSubarray(inputArray)).toEqual(expectedOutput)
  })

  it('should return the longest subarray of increasing numbers', () => {
    const inputArray = [1, 2, 3, 2, 4, 5, 6, 1, 2, 3, 4, 5]
    const expectedOutput = [1, 2, 3, 4, 5, 6]
    expect(getLongestSubarray(inputArray)).toEqual(expectedOutput)
  })

  it('should return an empty array if input array is empty', () => {
    const inputArray: number[] = []
    const expectedOutput: number[] = []
    expect(getLongestSubarray(inputArray)).toEqual(expectedOutput)
  })

  it('should return the longest subarray if there are multiple subarrays with the same length', () => {
    const inputArray = [1, 2, 3, 2, 4, 5, 6, 1, 2, 3, 4, 5, 6]
    const expectedOutput = [1, 2, 3, 4, 5, 6]
    expect(getLongestSubarray(inputArray)).toEqual(expectedOutput)
  })

  it('should return the longest subarray if the input array is already sorted in increasing order', () => {
    const inputArray = [1, 2, 3, 4, 5, 6]
    const expectedOutput = [1, 2, 3, 4, 5, 6]
    expect(getLongestSubarray(inputArray)).toEqual(expectedOutput)
  })

  it('should return the longest subarray if the input array is sorted in decreasing order', () => {
    const inputArray = [6, 5, 4, 3, 2, 1]
    const expectedOutput = [6]
    expect(getLongestSubarray(inputArray)).toEqual(expectedOutput)
  })
})
