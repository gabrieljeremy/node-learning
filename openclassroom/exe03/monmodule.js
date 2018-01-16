const direBonjour = function() {
    console.log('Bonjour !')
}
const direByeBye = function() {
    console.log('Bye bye !')
}
// Exporter les fonctions qu'on veut réutiliser à l'extérieur du fichier
exports.direBonjour = direBonjour
exports.direByeBye = direByeBye