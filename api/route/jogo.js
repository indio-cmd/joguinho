import express from "express"
import { atacar, curar, defender, status } from "../jogocontro/jogo.js"

const router = express.Router()
router.get("/status", status )
router.post("/jogada/atacar", atacar)
router.post("/jogada/defender", defender)
router.post("/jogada/curar", curar)

export default router