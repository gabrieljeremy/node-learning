// Inclusion du module framework express
const express = require('express')
const morgan = require('morgan') // Charge le middleware de logging
const favicon = require('serve-favicon') // Charge le middleware de favicon

// Création d'un objet en appelant la fonction express
const app = express()


app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html')
    res.end('<p>Vous êtes à l\'accueil, que puis-je pour vous ?</p>')
})
    .get('/sous-sol', function(req, res) {
        res.setHeader('Content-Type', 'text/html')
        res.end('<p>Vous êtes dans la cave à vins, ces bouteilles sont à moi !</p>')
    })
    // .get('/etage/1/chambre', function(req, res) {
    //     res.setHeader('Content-Type', 'text/html')
    //     res.end('<p>Hé ho, c\'est privé ici !</p>')
    // })
    // Routes dynamiques (:nomvariable)
    .get('/etage/:etagenum/chambre/:chambrenum', function(req, res) {
        console.log(req.params.etagenum)
        if (isNaN(req.params.etagenum) !== true) {
            // res.setHeader('Content-Type', 'text/plain')
            // res.end('Vous êtes à la chambre n° ' + req.params.chambrenum + ' de l\'étage n°' + req.params.etagenum)
            // Affiche le template chambre.ejs dans le dossier views et envoie la variable etagenum
            const noms = ['Robert', 'Jacques', 'David']
            res.render('chambre.ejs', {etage: req.params.etagenum, chambre : req.params.chambrenum, noms: noms})
        } else {
            res.setHeader('404', 'Content-Type', 'text/plain')
            res.end('Erreur 404 : page introuvable')
        }

    })
    .use(function(req, res, next){
        res.setHeader('Content-Type', 'text/html')
        res.end(404, '<p>Page introuvable !</p>')
    })
    .use(morgan('combined')) // Active le middleware de logging
    .use(express.static(__dirname + '/public')) // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)
    .use(favicon(__dirname + '/public/favicon.ico')) // Active la favicon indiquée
    .use(function(req, res){ // Répond enfin
        res.send('Hello')
    })

app.listen(8000)