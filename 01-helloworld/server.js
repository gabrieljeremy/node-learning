// Appel de la bibliothèque http
var http = require('http')

// Message à envoyer au visiteur dès qu'il arrive sur la page
var messagePourVisiteur = function(req, res) {
    // Envoi du code 200 (réponse valide) dans l'en-tête de la page avec le type MIME text/html qui indique un envoi de code HTML au navigateur
    res.writeHead(200, {'Content-Type' : 'text/html'})
    // Préparation du script HTML à mettre à disposition du navigateur
    res.write(
        '<!DOCTYPE html>' +
        '<html>' + 
            '<head>' +
                '<meta charset="utf8"/>' +
                '<title>Hello World</title>' +
            '</head>' +
            '<body>' +
                '<font face="Arial">Hello <b>World</b> (document valide)</font>' +
            '</body>' +
        '</html>'
    )
    // Message envoyé à l'utilisateur et stop le résultat
    res.end()
}

// Instanciation du serveur et appel de la fonction messagePourVisiteur
var server = http.createServer(messagePourVisiteur)

// Lancement du serveur sur le port 8080
server.listen(8000)

