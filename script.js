function calcular() {
    const altura = Number(document.getElementById('altura').value) / 100
    const peso = Number(document.getElementById('peso').value)
    const resultado = document.getElementById('res')

    if (altura == 0 || peso == 0) {
        window.alert('Preencha todos os campos acima!')
    } else {

        var imc = peso / (altura ** 2)
        // classificação 
        let clas = ''

        if (imc < 18.5) {
            clas = 'Magreza'
        } else if (imc < 24.9) {
            clas = 'Normal'
        } else if (imc < 29.9) {
            clas = 'Sobrepeso'
        } else if (imc < 35.9) {
            clas = 'Obesidade grau 1'
        }else if (imc < 39.9) {
            clas = 'Obesidade grau 2'
        }else { 
            clas = 'Obesidade grau 3'
        }
        console.log(clas)
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${clas})`
    }
}