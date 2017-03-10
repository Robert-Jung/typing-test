var letters = 'Letters to type'

function splitString(stringToSplit, separator) {
  var $arrayOfString = stringToSplit.split("")
  return $arrayOfString
}

var myArray = splitString(letters)

for (var i = 0; i <= myArray.length; i++) {
  var $span = document.createElement('span')
  $span.textContent = myArray[i]
  document.body.appendChild($span)
}
