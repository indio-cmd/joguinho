import express from "express"
import { atacar, status } from "../jogocontro/jogo.js"

const router = express.Router()
router.get("/status", status )
router.post("/jogada/atacar", atacar)

export default router