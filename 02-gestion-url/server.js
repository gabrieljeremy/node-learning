const http = require ('http')
const url = require('url')
// Pour récupérer les paramètres stockés dans l'url demandée par le client
const querystring = require('querystring')

var messagePourVisiteur = (req, res) => {
    // Détermination de l'URL demandée
    // Récupération des paramètres de l'url
    let params = querystring.parse(url.parse(req.url).query)
    res.writeHead(200, {'content-type' : 'text/html'})
    res.write('<font face="Arial">')
    // Gestion des paramètres
    // http://localhost:8000/?marque=Porche&modele=911
    if ('marque' in params && 'modele' in params) {
        res.write('Votre voiture préférée est ' + params['marque'] + ' ' + params['modele'])
    } else {
        res.write('Vous devez bien avoir un modèle')
        res.write(' de voiture de sport préféré !!!')
    }
    // let page = url.parse(req.url).pathname
    // Gestion des URL
    // if (page === '/') {
    //     res.write('Vous êtes sur la page de garde de présentation')
    //     res.write(' de voitures de sport<br>Rajoutez /de ou /it à votre URL')
    // } else if (page === '/de') {
    //     res.write('Sur cette page, le descriptif de quelques voitures')
    //     res.write(' de sport allemandes<br>A venir')
    // } else if (page === '/it') {
    //     res.write('Sur cette page, le descriptif de quelques voitures')
    //     res.write(' de sport italiennes<br>A venir')
    // }

    res.write('</font')
    res.end()
}
let server = http.createServer(messagePourVisiteur)
server.listen(8000)