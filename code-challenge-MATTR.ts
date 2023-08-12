export function getLongestSubarray(inputArray: number[]) {
  // check if input is an array, return if not.
  if (!Array.isArray(inputArray)) {
    console.warn('pls pass in an array')
    return
  }

  let resultArray: number[] = []
  for (let i = 0; i < inputArray.length; i++) {
    let longestSubArray = [inputArray[i]]
    for (let j = i + 1; j < inputArray.length; j++) {
      // if next element of inputArray is larger than last element of longestSubArray, add that element into longestSubArray.
      if (inputArray[j] > longestSubArray[longestSubArray.length - 1]) {
        longestSubArray.push(inputArray[j])
      }
    }

    if (longestSubArray.length > resultArray.length) {
      resultArray = longestSubArray
    }
  }

  return resultArray
}
