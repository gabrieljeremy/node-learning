const http = require ('http')

var messagePourVisiteur = (req, res) => { 
    res.writeHead(200)
    res.end('Serveur en fonctionnement')
}

var server = http.createServer(messagePourVisiteur)
server.listen(8000)

// Fonction exécutée lors de l'événement close sur le serveur (événement natif)
server.on('close', () => {
    // Message de contrôle en mode console
    console.log('Arrêt du serveur')
})
// Arrêt du serveur
// N.B : Cet arrêt déclenche l'affichage d'un message en mode console
server.close()