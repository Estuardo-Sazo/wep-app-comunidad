const { Router } = require('express');

const path = require('path');
const router = Router();



router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/app', (req, res) => {
    var file = __dirname+'/files/comunidad-app.apk';
    res.download(file);
});



module.exports = router;