const answerOne = document.getElementById('answerOne')
const answerTwo = document.getElementById('answerTwo')
const answerThree = document.getElementById('answerThree')
const answerFour = document.getElementById('answerFour')
const answerFive = document.getElementById('answerFive')
const answerSix = document.getElementById('answerSix')
const answerSeven = document.getElementById('answerSeven')
const answerEight = document.getElementById('answerEight')
const answerNigh = document.getElementById('answerNigh')
const answerTen = document.getElementById('answerTen')
const answerEleven = document.getElementById('answerEleven')
const answerTwelve = document.getElementById('answerTwelve')
const answerThirteen = document.getElementById('answerThirteen')
const answerFourteen = document.getElementById('answerFourteen')
const answerFifteen = document.getElementById('answerFifteen')
const answerSixteen = document.getElementById('answerSixteen')
const answerSeventeen = document.getElementById('answerSeventeen')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (answerOne.value === '' || answerOne.value == null) {
    messages.push('Answer is required')
  }

  if (answerOne.value == 15) {
    messages.push('08, correct')
  } else {
      messages.push('08, error')
    }

  if (answerTwo.value == 2035) {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerThree.value == 2035) {
    messages.push('09, 04, correct')
  } else {
      messages.push('09, 04, error')
    }

  if (answerFour.value == 06) {
    messages.push('11, correct')
  } else {
      messages.push('11, error')
    }

  if (answerFive.value == 2035) {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerSix.value == 07) {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerSeven.value == 2035) {
    messages.push('09, correct')
  } else {
      messages.push('09, error')
    }

  if (answerEight.value == 08) {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerNigh.value == 2035) {
    messages.push('21, correct')
  } else {
      messages.push('21, error')
    }

  if (answerTen.value == 12) {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerEleven.value == 2035) {
    messages.push('14, correct')
  } else {
      messages.push('14, error')
    }

  if (answerTwelve.value == 30) {
    messages.push('09, correct')
  } else {
      messages.push('09, error')
    }

  if (answerThirteen.value == 2035) {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerFourteen.value == 10) {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerFifteen.value == 2035) {
    messages.push('17, correct')
  } else {
      messages.push('17, error')
    }

  if (answerSixteen.value == 12) {
    messages.push('correct')
  } else {
      messages.push('error')
    }

  if (answerSeventeen.value == 2035) {
    messages.push('26, correct')
  } else {
      messages.push('26, error')
    }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
