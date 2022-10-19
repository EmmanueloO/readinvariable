input.onButtonPressed(Button.A, function () {
    temp += 1
    basic.showNumber(temp)
})
function Factor (A: number, B: number, C: number) {
    basic.showNumber((-1 * B + Math.sqrt(B ** 2 - 4 * (A * C))) / (2 * A))
}
function NextNumber () {
    temp = 0
    state += 1
    basic.showIcon(IconNames.Yes)
    basic.showNumber(temp)
}
input.onButtonPressed(Button.B, function () {
    temp += -1
    basic.showNumber(temp)
})
input.onGesture(Gesture.Shake, function () {
    if (state == 0) {
        num1 = temp
        NextNumber()
    } else if (state == 1) {
        num2 = temp
        NextNumber()
    } else if (state == 2) {
        num3 = temp
        NextNumber()
    } else if (state == 3) {
        num4 = temp
        NextNumber()
    } else {
        if (temp == 1) {
            EqOfLine(num1, num2, num3, num4)
        } else if (temp == 2) {
            Factor(num1, num2, num3)
        } else if (temp == 3) {
        	
        }
    }
})
function EqOfLine (x1: number, y1: number, x2: number, y2: number) {
    basic.showNumber(x1)
    basic.showNumber(y1)
    basic.showNumber(x2)
    basic.showNumber(y2)
    basic.showNumber((5 - 4) / (2 - 1))
}
let state = 0
let temp = 0
let num4 = 0
let num3 = 0
let num2 = 0
let num1 = 0
num1 = 0
num2 = 0
num3 = 0
num4 = 0
temp = 0
state = 0
basic.showNumber(temp)
