import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import axios from 'axios'
import cors from 'cors'

const app = express()
app.use(express.json())//converte json para objeto js
app.use(cors())
const PEXELS_KEY = process.env.PEXELS_KEY

app.get('/search', async (req, res) => {
    const client = axios.create({
        baseURL: 'https://api.pexels.com/v1',
        headers: {
            Authorization: PEXELS_KEY
        }
    })

    const resposta = await client.get('/search', {
        params: {
            query: req.query.query,
            per_page: req.query.per_page
        }
    })

    res.json(resposta.data)
})

//Define o número da porta
const port: number = 3001

//Deixa o servidor ouvindo a porta definida acima para disparar a requisição
app.listen(port, () => {
    console.log(`Executando na porta ${port}`)
}) 
