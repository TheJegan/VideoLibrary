var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var videoSchema = require('../model/video');
var Video = mongoose.model('Video', videoSchema);
var config = require('../env/config');



router.get('/',  config.isAuthenticated, function(req, res, next) {
	var limit = req.query.limit;
	var page = req.query.page;
    var title = req.query.title;


    if(title)
    {
        Video.find({title: new RegExp(title)} , function(err, v) {
            if (err) {
                res.send(err);
            }

            if (v) {
                res.send(v);
            }
        });
    }else{
        Video.find({}, function(err, v) {
            if (err) {
                res.send(err);
            }

            if (v) {
                res.send(v);
            }
        }).skip((page - 1) * limit).limit(limit);    
    }

    
    var callback = function(err, v){

    }
});

router.get('/:movieName',function(req, res, next){
    var title = req.params.movieName;
    
    Video.find({title: new RegExp(title)} , function(err, v) {
        if (err) {
            res.send(err);
        }

        if (v) {
            res.send(v);
        }
    });
});

router.post('/', function(req, res, next) {
    var name = req.body.name;

    var video = new Video({
        title: name
    });

    video.save(function(err){
        res.status(201).send(video);
    });
});

module.exports = router;