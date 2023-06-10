const express = require('express')
const path= require('path')
const app = express()
const port = process.env.PORT || 9000


let date_ob = new Date(Date.now());
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let contatore_download= 0;



app.use(express.static(__dirname + '/public/'))
app.use('/favicon.ico', express.static(__dirname + '/public/images/immagine.png'));
/** Servo pagine statiche */
app.get('/Autore', (req, res) => {
  console.log("rispondo alla richiesta Autore.")
  res.send("<h1>Autore: Gabriele Bellini</h1><p>Studente di Sicurezza dei Sistemi e delle Reti Informatiche all'UniMI</p>")
})
app.get('/', (req, res) => {
  contatore_download= contatore_download +1;
  console.log("Articolo numero "+contatore_download+" dal "+year + "-" + month + "-" + date)
  res.sendFile("./public/articoloPassword.pdf",{root:__dirname})
})
app.get('/Accessi', (req, res) => {
  res.send("<h1>Ci sono state "+contatore_download+" visualizzazzioni dell'articolo a partire dal "+year + "-" + month + "-" + date +"</h1>");
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})



