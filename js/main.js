const conoSimple = 1
const conoDoble = 2
const precioConoSimple = 500
const precioConoDoble = 1000

const nombre = prompt("Por favor, ingrese su nombre")

if (nombre === null) {
    alert("Hasta la próxima. Gracias por visitarnos.")

} else {
    alert(`Bienvenido a nuestra heladería, ${nombre}!`)

}


const obtenerCono = () => {
    let tipoCono = null

    while (tipoCono !== conoSimple && tipoCono !== conoDoble && nombre !== null) {
        const elegirCono = prompt(`¿Qué desea comprar?\n1. Cono simple $${precioConoSimple}\n2. Cono doble $${precioConoDoble}\nIngrese el número de la opción:`)

        if (elegirCono === null) {
            alert("Compra cancelada. Gracias por visitarnos.")
            return null
        }

        tipoCono = parseInt(elegirCono)

        if (tipoCono !== conoSimple && tipoCono !== conoDoble) {
            alert('Por favor ingrese una opcion válida')
        }
    }

    return tipoCono
}

const elegirSabores = (tipoCono) => {
    let mensaje = `Ingrese un sabor para el cono ${tipoCono === conoSimple ? 'simple (1 sabor)' : 'doble (2 sabores)'}:`
    return prompt(mensaje)
}

const comprarHelado = () => {
    let total = 0
    let continuar = true

    while (continuar) {
        const tipoCono = obtenerCono()

        if (tipoCono === null) {
            continuar = false
            break
        }

        if (tipoCono === conoSimple) {
            total += precioConoSimple

            let sabor = null
            while (!sabor) {
                sabor = elegirSabores(conoSimple)
                if (sabor === null) {
                    const confirmacion = confirm("¿Está seguro que desea cancelar la compra de este cono?")
                    if (confirmacion) {
                        alert("Compra cancelada. Gracias por visitarnos.")
                        return
                    }
                }
            }

            alert(`Ha elegido un cono simple con sabor: ${sabor}.`)
        }
        else if (tipoCono === conoDoble) {
            total += precioConoDoble
            let sabor1, sabor2

            for (let i = 1; i <= 2; i++) {
                let sabor = null
                while (!sabor) {
                    sabor = elegirSabores(conoDoble)
                    if (sabor === null) {
                        const confirmacion = confirm("¿Está seguro que desea cancelar la compra de este cono?")
                        if (confirmacion) {
                            alert("Compra cancelada. Gracias por visitarnos.")
                            return
                        }
                    }
                }

                if (i === 1) {
                    sabor1 = sabor
                } else if (i === 2) {
                    sabor2 = sabor
                }
            }

            if (sabor1 !== null && sabor2 !== null) {
                alert(`Ha elegido un cono doble con los sabores: ${sabor1} y ${sabor2}.`)
            }
        }

        continuar = confirm("¿Desea agregar otro cono?")
    }

    if (total > 0) {
        alert(`El total de su compra es: $${total}`)
        alert(`Gracias por su compra, vuelva pronto.`)
    }
}

comprarHelado()
