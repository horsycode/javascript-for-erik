import { question } from 'readline-sync'
import { randomNumber } from './randomnumber.mjs'



let answer

while (true) {
    let or = randomNumber(2)
    let wrong = randomNumber(100)
    let right = randomNumber(100)

    if (or == 1) {
        answer=question(wrong + ' or ' + right + '? ')
    } else {
        answer=question(right + ' or ' + wrong + '? ')
    }
    console.log('I heard,', answer)

    if (answer == right) {
        console.log('correct')
        break
    }
}
