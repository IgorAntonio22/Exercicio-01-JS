var comprimento1 = 0
var comprimento2 = 0
var comprimento3 = 0

while (comprimento1 == null | comprimento1 <= 0) {
    comprimento1 = prompt('Digite aqui o primeiro comprimento: ')
}

while (comprimento2 == null | comprimento2 <= 0) {
    comprimento2 = prompt('Digite aqui o segundo comprimento: ')
}

while (comprimento3 == null | comprimento3 <= 0) {
    comprimento3 = prompt('Digite aqui o terceiro comprimento: ')
}

var ehEquilatero = comprimento1 == comprimento2 & comprimento3 == comprimento2
var ehEscaleno = comprimento1 !== comprimento2 & comprimento1 !== comprimento3 & comprimento3 != comprimento2

if (ehEquilatero) {
    alert('O seu triangulo é Equilátero!!!')
} else if (ehEscaleno) {
    alert('O seu triangulo é Escaleno!!! ')    
} else {
    alert('O seu triangulo é Isóceles!!!')
}





























