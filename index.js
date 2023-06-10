const express = require('express')
const path= require('path')
const fs = require('fs');
const app = express()
const port = process.env.PORT || 9000



//app.use(express.static(__dirname + '/public/'))
app.use('/favicon.ico', express.static(__dirname + '/public/images/immagine.png'));
/** Servo pagine statiche */
app.get('/Autore', (req, res) => {
  console.log("rispondo con ChiSiamo")
  res.send("<h1>Autore: Gabriele Bellini</h1><p>Studente di Sicurezza dei Sistemi e delle Reti Informatiche all'UniMI</p>")
})
function aggiornaNumeroVisualizzazioni(){
  fs.readFile('./public/accessi.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    data= parseInt(data);
    data= data+1;
    fs.writeFile('./public/accessi.txt', data, err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
  });
  
}
app.get('/ArticoloPassword', (req, res) => {
  res.sendFile("./public/articoloPassword.pdf",{root:__dirname})
  aggiornaNumeroVisualizzazioni();
})
app.get('/AccessiArticoloPassword', (req, res) => {
  fs.readFile('./public/accessi.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send("<h1>Il numero di visualizzazzioni dell'articolo sulle password è "+data+"</h1>");
  })
})
app.get('/*', function(req, res) {
  res.send('<h1>Le pagine diponibili sono<\h1><br><a href="./Autore">Autore</a><br><a href="./ArticoloPassword">ArticoloPassword</a><br><a href="./AccessiArticoloPassword">Numero di accessi ad ArticoloPassword</a>');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})



