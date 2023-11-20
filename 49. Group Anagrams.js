/**
 * @param {string[]} strs
 * @return {string[][]}
 */


function sortString(inputStr) {
    // Convert the string to an array of characters
    var charArray = inputStr.split('');
  
    // Sort the array of characters
    charArray.sort();
  
    // Join the sorted characters back into a string
    var sortedStr = charArray.join('');
  
    return sortedStr;
  }

var groupAnagrams = function(strs) {
  const map1 = new Map();
  const result = [];
  for (let i in strs) {
    
    let a = sortString(strs[i]);

    // Check if the key exists in the map
    if (!map1.has(a)) {
      map1.set(a, [strs[i]]); // If not, set a new array with the current string
    } else {
      map1.get(a).push(strs[i]); // If yes, push the current string to the existing array
    }
  }
  
  for (let [key, value] of map1) {
    result.push(value);
    }
    return result;
};