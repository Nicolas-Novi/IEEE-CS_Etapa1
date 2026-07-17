const btnFavoritar = document.getElementById("btnFavoritar")
const imgFavoritar = document.getElementById("imgFavoritar")

const imgCelular = document.getElementById("imgCelular")
const corSelecionada = document.getElementById("corSelecionada")
const corTitulo = document.getElementById("tituloCor")
const opcoesCores = document.querySelectorAll('input[name="cor"]')

const memoriaTitulo = document.getElementById("tituloMemoria")
const memoriaSelecionada = document.getElementById("memoriaSelecionada")
const opcoesMemoria = document.querySelectorAll('input[name="memoria"]')

opcoesCores.forEach(input => {
    input.addEventListener("change", (e) => {
        if (e.target.checked) {
            imgCelular.src = "assets/" + e.target.id + ".png"
            imgCelular.alt = "cor-" + e.target.value
            corSelecionada.textContent = e.target.value
            corTitulo.textContent = e.target.value

            e.target.id == "cor-azul-marinho" ? opcoesMemoria[0].disabled = true : opcoesMemoria[0].disabled = false

            e.target.id == "cor-bege" ? opcoesMemoria[2].disabled = true : opcoesMemoria[2].disabled = false
        }
    })
})

opcoesMemoria.forEach(input => {
    input.addEventListener("change", (e) => {
        if (e.target.checked) {
            memoriaSelecionada.textContent = e.target.value
            memoriaTitulo.textContent = e.target.id
        }
    })
})

btnFavoritar.addEventListener("click", () => {
    if (imgFavoritar.alt == "Favoritar") {
        imgFavoritar.src = "assets/heart-full.svg"
        imgFavoritar.alt = "Favoritado"
    }
    else {
        imgFavoritar.src = "assets/heat-empty.svg"
        imgFavoritar.alt = "Favoritar"
    }
})



