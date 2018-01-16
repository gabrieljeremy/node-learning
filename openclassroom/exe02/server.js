const http = require('http')
// Module pour émettre des événements
const EventEmitter = require('events').EventEmitter

// Création d'un objet basé sur EventEmitter
let jeu = new EventEmitter()
jeu.on('gameover', function(name, age){
    console.log(`Bonjour ${name}, vous avez ${age}`)
})
// Génération d'un événément gameover avec un message à ceux qui le réceptionneront
jeu.emit('gameover', 'Jérémy', 27)

let server = http.createServer(function(req, res) {
    res.writeHead(200)
    res.end('Salut tout le monde !')
})
// La fonction de callback de createServer qu'on lui envoie en paramètre est automatiquement ajoutée à l'évènement "request"
// var server = http.createServer();
// server.on('request', function(req, res) { });

server.on('close', function() { // On écoute l'évènement close
    console.log('Bye bye !')
})
server.listen(8000) // Démarre le serveur
server.close() // Arrête le serveur. Déclenche l'évènement close