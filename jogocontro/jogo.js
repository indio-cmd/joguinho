import { inimigo, campeao } from "../repository/jogo.js"

export function status(req, res) {
    res.json({
        campeao: campeao,
        inimigo:inimigo

    })
}

export function atacar(req, res) {
inimigo.hp = inimigo.hp - campeao.ataque 

inimigoJoga()
    
res.json({message: "Voce atacou", 
    campeao:campeao.hp,
    inimigo:inimigo.hp
})
}

export function defender(req,res){
    campeao.defesa = 10 

    inimigoJoga()
    
    res.json({message: "Voce defendeu",
campeao:campeao.hp,
inimigo:inimigo.hp

    })
}

export function curar(req, res){
    campeao.hp = campeao.hp + campeao.CuraBase

    if(campeao.hp > campeao.hpBase){
        campeao.hp = campeao.hpBase
    }

    res.json({menssage: "Voce curou",
        campeao:campeao.hp,
        inimigo:inimigo.hp
    })
}

export function inimigoJoga(req, res) {
    const jogada = 
    Math.floor(Math.random() *3 )

    if(jogada === 0) {
campeao.hp = campeao.hp - inimigo.DanoBase
    }

    if(jogada === 1){
        inimigo.hp = inimigo.hp + inimigo.CuraBase
    }
    if(inimigo.hp> inimigo.hpBase){
        inimigo.hp = inimigo.hpBase
    }

    if(jogada === 2) {

    }
}






