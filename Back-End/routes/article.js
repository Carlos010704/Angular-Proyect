'use strict'

const express = require('express');
const articleController = require('../controllers/article');

const router = express.Router();

const multipart = require('connect-multiparty');
const md_upload = multipart({ uploadDir: './upload/articles' });

// Ruta para articulos

router.post('/datos-curso', articleController.datosCurso);
router.get('/test-de-controlador', articleController.test);

// Rutas Utiles
router.post('/save', articleController.save);
router.get('/articles/:last?', articleController.getArticles);
router.get('/article/:id', articleController.getArticle);
router.put('/article/:id', articleController.update);
router.delete('/article/:id', articleController.delete);
router.post('/upload-image/:id?',md_upload, articleController.upload);
router.get('/get-image/:image', articleController.getImage);
router.get('/search/:search', articleController.search);

module.exports = router;