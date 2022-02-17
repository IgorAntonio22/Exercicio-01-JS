var n1 = null
var n2 = null
var n3 = null
var maior = 0

while (n1 == null) {
    n1 = parseInt(prompt('Digite aqui o primeiro número: '))
}

while (n2 == null) {
    n2 = parseInt(prompt('Digite aqui o segundo número: '))
}

while (n3 == null) {
    n3 = parseInt(prompt('Digite aqui o terceiro número: '))
}

maior = n1

if (maior < n2) {
    maior = n2
}

if (maior < n3) {
    maior = n3
}

alert('O seu maior número inteiro é: ' + maior)

