import { inimigo, campeao } from "../repository/jogo.js"

export function status(req, res) {
    res.json({
        campeao: campeao,
        inimigo:inimigo

    })
}

export function atacar(req, res) {
inimigo.hp = inimigo.hp - campeao.ataque 

 //if(inimigo.hpBase < 0 ){
    //    res.json({message:"inimigo DERROTADOOOOOOOOOOO KRL"})
  //  }
 //if(campeao.hpBase < 0 ){
  //      res.json({message:"campeao DERROTADOOOOOOOOOOO KRL"})
  //  }


inimigoJoga()
    
res.json({message: "Voce atacou", 
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






