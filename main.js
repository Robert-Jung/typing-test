var letters = 'Letters to type'

function splitString(stringToSplit, separator) {
  var $arrayOfString = stringToSplit.split("")
  return $arrayOfString
}

var myArray = splitString(letters)

for (var i = 0; i <= myArray.length; i++) {
  var $span = document.createElement('span')
  $span.textContent = myArray[i]
  $span.classList.add('font')
  document.body.appendChild($span)
}

var $currentLetter = document.querySelector('span')
$currentLetter.classList.add('current')

var totalError = []

var $scoreboard = document.createElement('p')
document.body.appendChild($scoreboard)

var keyHandler = function (event) {
  var keyEntered = event.key
    if ($currentLetter.textContent === keyEntered) {
      $currentLetter.classList.remove('incorrect','current')
      $currentLetter.classList.add('correct')
      $currentLetter = $currentLetter.nextElementSibling
      $currentLetter.classList.add('current')
    } else {
      var err = totalError.push(event.key)
      $currentLetter.classList.add('incorrect')
      $scoreboard.textContent = ('You have made ' + totalError.length + ' errors so far')
  }
}

document.body.addEventListener('keypress', keyHandler)
