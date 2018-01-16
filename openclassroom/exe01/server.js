const http = require('http')
const url = require('url')
//  Module qui découpe les différents paramètres des urls
var querystring = require('querystring')
let instructionsNouveauVisiteur = function(req, res) {
    let page = url.parse(req.url).pathname
    let params = querystring.parse(url.parse(req.url).query)
    console.log(page)
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<!DOCTYPE html>' +
        '<html>'+
        '    <head>'+
        '        <meta charset="utf-8" />'+
        '        <title>Ma page Node.js !</title>'+
        '    </head>'+ 
        '    <body>')
    if (page === '/') {
        res.write('<p>Vous êtes à l\'accueil, que puis-je pour vous ?</p>')
        if ('prenom' in params && 'nom' in params) {
            res.write('<p>Vous vous appelez ' + params['prenom'] + ' ' + params['nom'] +'</p>')
        }
        else {
            res.write('<p>Vous devez bien avoir un prénom et un nom, non ?</p>')
        }
    }
    else if (page === '/sous-sol') {
        res.write('<p>Vous êtes dans la cave à vins, ces bouteilles sont à moi !</p>')
    }
    else if (page === '/etage/1/chambre') {
        res.write('<p>Hé ho, c\'est privé ici !</p>')
    } else {
        res.write('<p>Erreur 404</p>')
    }
    res.write(
        '    </body>'+
        '</html>')
    res.end()
    res.end()
}
let server = http.createServer(instructionsNouveauVisiteur)
server.listen(8000)