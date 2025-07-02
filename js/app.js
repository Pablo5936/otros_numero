const MENSAJE1 = document.getElementById('resultado1')
const EXPLICACION1 = document.getElementById('explicacion1')
const MENSAJE2 = document.getElementById('resultado2')
const EXPLICACION2 = document.getElementById('explicacion2')

let numero = 0
let numeroNombreCalculado = 0

function limpiarFecha(numero) {
  let numeros = '0123456789'
  let fechaNumero = ''
  for (let i = 0; i < numero.length; i++) {
    if (numeros.includes(numero[i])) {
      fechaNumero += numero[i]
    }
  }
  fechaNumero = parseInt(fechaNumero)
  return fechaNumero
}

function reducirNumero(numero) {
  let numeroReducido = numero
  console.log('Número inicial:', numeroReducido)
  const maestros = [11, 22]
  while (numeroReducido > 9 && !maestros.includes(numeroReducido)) {
    let suma = 0
    let digitos = numeroReducido.toString().split('')
    //convierte los números a String y los incluye en un array
    for (let i = 0; i < digitos.length; i++) {
      suma += parseInt(digitos[i])
    }
    numeroReducido = suma
  }
  return numeroReducido
}

function calcularNumeroDestino() {
  const FECHA = document.getElementById('fecha-nacimiento')
  const fechaTexto = FECHA.value.trim()

  if (!fechaTexto) {
    MENSAJE1.innerHTML = 'Por favor, ingresa una fecha válida.'
    return
  }

  // Limpiar la fecha usando la función limpiarFecha
  const fechaNumerica = limpiarFecha(fechaTexto)

  // Reducir el número limpio
  numero = reducirNumero(fechaNumerica)

  // Mostrar el resultado
  MENSAJE1.innerHTML = `Tu número de destino es: ${numero}`
}

function mostrarSignificadoNumero() {
  // Validar que se haya calculado un número personal válido
  if (numero === 0 || numero === null || numero === undefined) {
    MENSAJE1.innerHTML = 'Por favor, calcula primero tu número personal.'
    EXPLICACION1.innerHTML = '' // Limpiar explicación anterior
    return
  }

  // Buscar el significado del número personal
  const resultado = numeroDestino.find((s) => s.numero === numero)

  if (resultado) {
    EXPLICACION1.innerHTML = `<strong>Significado del número ${numero}:</strong><br>${resultado.descripcion}`
    MENSAJE1.innerHTML = `Tu número de destino es: ${numero}` // Mantener el resultado visible
  } else {
    EXPLICACION1.innerHTML = `No se encontró el significado para el número ${numero}.`
    console.error(`Número ${numero} no encontrado en el array de significados`)
  }
}

function calcularNumeroNombre() {
  const nombreInput = document.getElementById('nombre')
  const nombre = nombreInput.value.trim().toUpperCase()

  if (!nombre) {
    MENSAJE2.innerHTML = 'Por favor, ingresa tu nombre completo.'
    return
  }

  // Asignar valores numéricos a las letras
  const valoresLetras = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 1,
    K: 2,
    L: 3,
    M: 4,
    N: 5,
    Ñ: 5,
    O: 6,
    P: 7,
    Q: 8,
    R: 9,
    S: 1,
    T: 2,
    U: 3,
    V: 4,
    W: 5,
    X: 6,
    Y: 7,
    Z: 8,
    Ç: 3
  }

  let suma = 0
  for (let i = 0; i < nombre.length; i++) {
    const letra = nombre[i]
    if (valoresLetras[letra]) {
      suma += valoresLetras[letra]
    }
  }

  const numeroNombre = reducirNumero(suma)
  MENSAJE2.innerHTML = `Tu número del nombre es: ${numeroNombre}`

  // Guardar el número calculado para usar en mostrarSignificadoNombre
  numeroNombreCalculado = numeroNombre
}

function mostrarSignificadoNombre() {
  // Validar que se haya calculado un número del nombre válido
  if (!numeroNombreCalculado) {
    MENSAJE2.innerHTML = 'Por favor, calcula primero tu número del nombre.'
    EXPLICACION2.innerHTML = ''
    return
  }

  // Buscar el significado del número del nombre
  const resultado = numerosNombre.find(
    (s) => s.numero === numeroNombreCalculado
  )

  if (resultado) {
    EXPLICACION2.innerHTML = `<strong>Personalidad del número ${numeroNombreCalculado}:</strong><br>${resultado.personalidad}`
    MENSAJE2.innerHTML = `Tu número del nombre es: ${numeroNombreCalculado}`
  } else {
    EXPLICACION2.innerHTML = `No se encontró el significado para el número ${numeroNombreCalculado}.`
    console.error(
      `Número ${numeroNombreCalculado} no encontrado en el array de significados del nombre`
    )
  }
}
