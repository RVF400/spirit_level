let x_value = 0
let y_value = 0
let X = 0
let Y = 0
basic.forever(function () {
    x_value = Math.constrain(input.rotation(Rotation.Roll), -30, 30)
    y_value = Math.constrain(input.rotation(Rotation.Pitch), -30, 30)
    X = Math.round(Math.map(x_value, -30, 30, 0, 4))
    Y = Math.round(Math.map(y_value, -30, 30, 0, 4))
    basic.clearScreen()
    led.plot(X, Y)
    serial.writeValue("x", X)
    serial.writeValue("y", Y)
})
