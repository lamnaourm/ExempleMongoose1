import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Modelp from './models/Personne.js'


dotenv.config()
const app = express()
app.use(express.json())

const port = process.env.PORT || 3000

app.post('/personne', (req, res) => {
    const personne = req.body
    const newP = new Modelp(personne)
    newP.save()
    res.end()
})


app.get('/personne', (req, res) => {
    Modelp.find({})
    .then((personnes) => {
        return res.json(personnes)
    })
    .catch((err) => {
        return res.status(510).send('erreur')
    })
})

mongoose.connect(process.env.URL_MONGO)
    .then(() =>{
        console.log('Connexion reussie')
    })
    .catch((err) => {
        console.log('Connexion non reussie')
    })


app.listen(port)
