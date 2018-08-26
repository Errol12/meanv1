const express = require('express');
const router = express.Router();
const mongoose =  require('mongoose');

const db ="mongodb://localhost:27017/videoplayer";
mongoose.Promise = global.Promise;
mongoose.connect(db,{ useNewUrlParser: true },function(err){
	if(err){
		console.error("Error! "+ err);
	}
	else
	{
		console.log("Success");
	}
});

router.get('/',function(req,res){
	res.send('api works');
});

module.exports = router;