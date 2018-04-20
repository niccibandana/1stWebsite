var express = require('express');
var router = express.Router();

/* GET home page.*/
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});


/* GET TaskTracker page. */
router.get('/tasks', function(req, res) {
    res.render('tasks', { title: 'Task Tracker !' });
});
/* delete task */
app.get('/', post.edit);
router.delete('/tasklist', function(req, res) {
    res.render('/tasks', { title: 'Task Tracker ! '})
});

module.exports = router;
/* GET tasklist page. */
router.get('/tasklist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('tasklist', {
            "tasklist" : docs
        });
    });
});