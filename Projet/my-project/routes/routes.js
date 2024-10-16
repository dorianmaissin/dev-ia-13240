"use strict";

// Import de librairie
// --
const express = require('express');
const router = express.Router();



// Importer les contrôleurs
// --

const homeController = require('./../src/Controllers/HomeController');
const aboutController = require('./../src/Controllers/AboutController');
const contactController = require('../src/Controllers/ContactController');
const registerController = require('../src/Controllers/RegisterController');
const loginController = require('../src/Controllers/LoginController');
const booksController = require('../src/Controllers/BooksController');



// Définir les routes
// --

router.get('/', homeController.getHome);
router.get('/about', aboutController.getAbout);
router.get('/contact', contactController.getContact);
router.get('/register', registerController.getRegister)
router.get('/login', loginController.getLogin)
router.get('/books', booksController.getBooks)

// Exporter les routes
// --

module.exports = router;
