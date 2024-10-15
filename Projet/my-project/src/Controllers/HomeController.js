const { user } = require("pg/lib/defaults");

exports.getHome = (req, res) => {
    // res.send('<h1>Bienvenue sur la page d\'accueil !</h1>');
    const userName = 'jhon'
    const fruits = ['pomme', 'poire', 'banane']
    res.render('pages/homepage/index', {
        username: userName,
        fruits: fruits
    })
};
  