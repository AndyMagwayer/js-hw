let answer = +prompt('Введите ваш возраст и я скажу ваш стаж работы')

if (answer === 0  ){
    alert('Вам ещё рости и рости')
}
else if(answer > 150) {
  alert('You will die man hahahahha')
}
else if(answer > 0 && answer <= 8) {
  alert('Вам ещё рости и рости')
}

else if(answer >= 9 && answer <= 20) {
    alert('Вам ещё учиться и учиться')
  }

  else if(answer >= 21 && answer <= 65) {
    alert('Вам ещё работать и работать')
  }

  else if(answer >= 66 && answer <= 99) {
    alert('Вам уже на пенсию надо')
  }

  else if(answer >= 100) {
    alert('YOu will DIe')
  }

  else {
    alert ('')
  }
  
  
