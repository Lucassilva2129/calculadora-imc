function temaMasculino() {
    // Pega o body e muda a cor para azul ( Masculino )
    document.body.style.background = '#1e3a8a'
}

function temaFeminino() {
    // Pega o body e muda a cor para rosa ( Feminino )
    document.body.style.background = '#ec4899'
}


function calcular() {
    const altura = Number(document.getElementById('altura').value) / 100
    const peso = Number(document.getElementById('peso').value)
    const resultado = document.getElementById('res')

    if (!altura || !peso) {
        window.alert('Preencha todos os campos acima!')
        return
    } 
    // Formula do IMC 
    const imc = peso / (altura ** 2)

    const classificacao = [
        {
            limite: 18.5,
            texto: 'Abaixo do peso!'
        },
        {
            limite: 25,
            texto: 'Peso normal!'
        },
        {
            limite: 30,
            texto: 'Sobrepeso!'
        },
        {
            limite: Infinity,
            texto: 'Obesidade!'
        }
    ]

    // Procura a classificacao 
    const resultadoImc = classificacao.find((item) => imc < item.limite)

    // Mostra o resultado 
    resultado.innerHTML= `Seu peso é ${imc.toFixed(2)}, ${resultadoImc.texto}`
}
