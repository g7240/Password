const express = require('express')
const path= require('path')
const app = express()
const port = process.env.PORT || 9000

let contatore_download;
let date;
let month;
let year;



app.use(express.static(__dirname + '/public/'))
app.use('/favicon.ico', express.static(__dirname + '/public/images/immagine.png'));
/** Servo pagine statiche */
app.get('/Autore', (req, res) => {
  console.log("rispondo alla richiesta Autore.")
  res.send("<h1>Autore: Gabriele Bellini</h1><p>Studente di Sicurezza dei Sistemi e delle Reti Informatiche all'UniMI</p>")
})
app.get('/', (req, res) => {
  contatore_download= contatore_download +1;
  console.log("rispondo con l'Articolo. Volta numero "+contatore_download)
  res.sendFile("./public/articoloPassword.pdf",{root:__dirname})
})
app.get('/Accessi', (req, res) => {
  res.send("<h1>Ci sono state "+contatore_download+" visualizzazzioni dell'articolo a partire dal "+year + "-" + month + "-" + date +"</h1>");
})

app.listen(port, () => {
  let date_ob = new Date(Date.now());
  date = date_ob.getDate();
  month = date_ob.getMonth() + 1;
  year = date_ob.getFullYear();
  contatore_download= 0;

  console.log(`App listening on port ${port}`)
})



