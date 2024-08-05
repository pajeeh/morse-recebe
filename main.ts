radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
radio.setGroup(1)
