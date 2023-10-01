const express = require('express')
const path= require('path')
const app = express()
const port = process.env.PORT || 9000


app.use(express.static(__dirname + '/public/'))
app.use('/favicon.ico', express.static(__dirname + '/public/images/immagine.png'));
/** Servo pagine statiche */
app.get('/Autore', (req, res) => {
  res.send("<h1>Autore: Gabriele Bellini</h1><p>Studente di Sicurezza dei Sistemi e delle Reti Informatiche all'UniMI</p>")
})
app.get('/', (req, res) => {
  res.sendFile("./public/articoloPassword.pdf",{root:__dirname})
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})



