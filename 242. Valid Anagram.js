/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
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
  
  var isAnagram = function(s, t) {
      return sortString(s) === sortString(t);
  };