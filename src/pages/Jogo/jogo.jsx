import { useEffect, useState } from "react"

//import '/style.css'
function Jogo () {

const [campeao, setCampeao] = useState(300)
const [inimigo, setInimigo] = useState(200)
const [mensagem, setMensagem] = useState()

async function pegarstatus() {

    const resposta = await fetch("http://localhost:3000/jogo/status")
    
    const dados = await resposta.json()
    setCampeao(dados.campeao.hp)
    setInimigo(dados.inimigo.hp)
}

async function atacar() {

    const resposta = await fetch(
        "http://localhost:3000/jogo/jogada/atacar",

        {method: "POST"}
    )
    
    const dados = await resposta.json()
    setCampeao(dados.campeao)
    setInimigo(dados.inimigo)
    setMensagem(dados.mensagem)
}

async function defender(){

    const resposta = await fetch("http://localhost:3000/jogo/jogada/defender",
        {method: "POST"}
    )

const dados = await resposta.json()
 setCampeao(dados.campeao)
    setInimigo(dados.inimigo)
    setMensagem(dados.mensagem)
}

async function curar() {

    const resposta = await fetch("http://localhost:3000/jogo/jogada/curar",
        {method: "POST"}
    )
     
    const dados = await resposta.json()
     setCampeao(dados.campeao)
    setInimigo(dados.inimigo)
    setMensagem(dados.mensagem) 
}

useEffect(() => {
    pegarstatus() 
}, [])

return(
    <div>
<h1>jogo comecou</h1>

<button onClick={atacar}>atacar</button>

<button onClick={defender} > defender </button>

<button onClick={curar}> curar </button>

    </div>
)
    
}
export default Jogo