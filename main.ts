let nbr = 0
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.pause(2000)
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
OLED.init(128, 64)
OLED12864_I2C.init(60)
OLED12864_I2C.clear()
OLED.clear()
basic.forever(function () {
    OLED12864_I2C.clear()
    while (input.buttonIsPressed(Button.B)) {
        OLED.writeBigNumber(0, 0, sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.MicroSeconds
        ))
    }
    led.unplot(2, 0)
    if (input.buttonIsPressed(Button.A)) {
        if (nbr == 255) {
            nbr = 0
            basic.pause(1000)
            led.plot(2, 2)
        } else if (nbr == 0) {
            nbr += 255
            basic.pause(1000)
            led.unplot(2, 2)
        } else {
        	
        }
    }
    robotbit.MotorRun(robotbit.Motors.M1A, nbr)
})
