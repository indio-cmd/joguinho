import { inimigo, campeao } from "../repository/jogo.js"

export function status(req, res) {
    res.json({
        campeao: campeao,
        inimigo:inimigo

    })
}

export function atacar(req, res) {
inimigo.hp = inimigo.hp - campeao.ataque 

if(inimigo.hp <=0){
    inimigo.hp = 0

    return res.json({mensagem: "Voce venceu",
        campeao:campeao.hp,
        inimigo:inimigo.hp
    })
}

inimigoJoga()
    
return res.json({mensagem: "Voce atacou", 
    campeao:campeao.hp,
    inimigo:inimigo.hp
})
}

export function defender(req,res){
    campeao.defesa = 10 

    inimigoJoga()
    
   return res.json({mensagem: "Voce defendeu",
    campeao:campeao.hp,
    inimigo:inimigo.hp

    })
}

export function curar(req, res){
    campeao.hp = campeao.hp + campeao.CuraBase

    if(campeao.hp > campeao.hpBase){
        campeao.hp = campeao.hpBase
    }

    res.json({mensagem: "Voce curou",
        campeao:campeao.hp,
        inimigo:inimigo.hp
    })
}
export function inimigoJoga() {
    const jogada = Math.floor(Math.random() * 3)

    if (jogada === 0) {
        const dano = Math.max(inimigo.DanoBase - campeao.defesa, 0)
        campeao.hp = campeao.hp - dano
        if (campeao.hp < 0) campeao.hp = 0
    }

    if (jogada === 1) {
        inimigo.hp = inimigo.hp + inimigo.CuraBase
        if (inimigo.hp > inimigo.hpBase) {
            inimigo.hp = inimigo.hpBase
        }
    }

    
    campeao.defesa = 0
}