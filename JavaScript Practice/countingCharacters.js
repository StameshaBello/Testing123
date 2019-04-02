/*function countingCharacters(stringtoCount) {
    console.log(stringtoCount + " has " + stringtoCount.length + " characters.")
}*/

/*function countingCharacters2(stringtoCount2, charactertoFind) {
    var characterCount = 0;
    for (var characterPosition = 0; characterPosition < stringtoCount2.length;
        characterPosition++) {
              if (stringtoCount2[characterPosition] == charactertoFind) {
                  characterCount++;
              }
        }
    console.log("String to search in: " + stringtoCount2);
    console.log("Character to find: " + charactertoFind);
    console.log("Number of times the character appears: " + characterCount);
}*/

/*function countingCharacters3(str, search) {
    var count = 0;
    var numChars = search.length;
    var lastIndex = str.length - numChars;
    for (var index = 0; index <= lastIndex; index++) {
        var current = str.substring(index, index + numChars);
            if (current == search) {
                count++;
            }
    }
    console.log("String to search in: " + str);
    console.log("Series to find: " + search);
    console.log("Number of times the series appears: " + count);
}*/

/*.substring(a, b) will take the characters of a string from the beginning of
  the index ("a") up to -- BUT NOT INCLUDING -- "b". The first character of a
  string has a value of 0.*/

  function countingCharacters3(str, search) {
      var count = 0;
      var numChars = search.length;
      var lastIndex = str.length - numChars;
      for (var index = 0; index <= lastIndex; index++) {
          var current = str.substring(index, index + numChars);
              if (current == search) {
                  count++;
              }
      }
      return count;
  }
