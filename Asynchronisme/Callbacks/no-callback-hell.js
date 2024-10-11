const { readFile } = require('fs').promises;


// Methode 1
// --

readFile('exemple1.txt', 'utf8')
    .then( data1 => {
        return readFile('exemple2.txt', 'utf8')
            .then( data2 => {
                console.log('Contenu des deux fichiers :', data1, data2);
            } )
    } )
    .catch(err => {
        console.error('Erreur lors de la lecture d\'un fichier :', err)
    })