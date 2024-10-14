exports.getHome = (req, res) => {
    // res.send('<h1>Bienvenue sur la page d\'accueil !</h1>');

    res.render('pages/homepage/index', {})
};
  