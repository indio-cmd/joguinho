import express from "express"
import jogo from "./route/jogo.js"

const app = express()

app.use(express.json())

app.use("/jogo",jogo)

app.listen(3000, () => {
    console.log("servidor rodando da porta 3000")
})