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

var $firstLetter = document.querySelector('span')
$firstLetter.classList.add('current')

document.body.addEventListener('keypress', function(event) {
  var keyEntered = event.key
    if ($firstLetter.textContent === keyEntered) {
      $firstLetter.classList.remove('incorrect','current')
      $firstLetter.classList.add('correct')
      $firstLetter = $firstLetter.nextElementSibling
      $firstLetter.classList.add('current')
    } else {
      $firstLetter.classList.add('incorrect')
  }
})
